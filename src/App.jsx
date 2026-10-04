import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieListing from './components/MovieListing';
import MovieModal from './components/MovieModal';
import Footer from './components/Footer';
import './App.css';

// Every time the route changes, open the new page from the top
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route
          path="/movies"
          element={
            <div id="movie-section">
              <MovieListing onSeeDetails={(movie) => setSelectedMovie(movie)} />
            </div>
          }
        />
        <Route path="*" element={<Hero />} />
      </Routes>

      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />

      <Footer />
    </div>
  );
}

export default App;
