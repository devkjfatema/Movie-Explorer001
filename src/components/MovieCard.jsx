
const MovieCard = ({ movie, onSeeDetails }) => {
  const { name, image, rating, premiered } = movie;

  return (
    <div className="movie-card">
      <img
        src={image?.medium || 'https://via.placeholder.com/210x295?text=No+Image'}
        alt={name}
        className="card-poster"
      />
      <div className="card-content">
        <h3 className="card-title">{name}</h3>
        <div className="card-info">
          <span>⭐ {rating?.average || 'N/A'}</span>
          <span>📅 {premiered ? premiered.split('-')[0] : 'N/A'}</span>
        </div>
        <button className="details-btn" onClick={() => onSeeDetails(movie)}>
          See Details
        </button>
      </div>
    </div>
  );
};

export default MovieCard;