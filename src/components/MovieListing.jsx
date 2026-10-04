
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

const MovieListing = ({ onSeeDetails }) => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        let url = 'https://api.tvmaze.com/shows';
        if (searchQuery.trim() !== '') {
          url = `https://api.tvmaze.com/search/shows?q=${searchQuery}`;
        }

        const res = await fetch(url);
        const data = await res.json();

        // TVMaze Search API returns [{ show: {...} }], All Shows returns [...]
        const formattedData = searchQuery.trim() !== '' 
          ? data.map(item => item.show) 
          : data.slice(0, 20); // First 20 shows

        setMovies(formattedData);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(() => {
      fetchMovies();
    }, 400); // Debounce to prevent rapid API calls

    return () => clearTimeout(timer);
  }, [searchQuery]);

  return (
    <section className="movie-listing-section">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="🔍 Search for a movie..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {loading ? (
        <p className="loading-text">Loading movies...</p>
      ) : (
        <div className="movie-grid">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} onSeeDetails={onSeeDetails} />
            ))
          ) : (
            <p className="no-results">No movies found.</p>
          )}
        </div>
      )}
    </section>
  );
};

export default MovieListing;