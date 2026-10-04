

const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  const { name, image, rating, premiered, summary, genres } = movie;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>
        
        {image?.original || image?.medium ? (
          <img
            src={image?.original || image?.medium}
            alt={name}
            className="modal-backdrop"
          />
        ) : null}

        <div className="modal-body">
          <h2>{name}</h2>
          <div className="modal-meta">
            <span>⭐ Rating: {rating?.average || 'N/A'}</span>
            <span>📅 Release: {premiered || 'N/A'}</span>
            {genres && <span>🎭 Genres: {genres.join(', ')}</span>}
          </div>

          <div className="modal-overview">
            <h3>Overview</h3>
            {/* TVMaze summary text contains HTML tags */}
            <div dangerouslySetInnerHTML={{ __html: summary || 'No summary available.' }} />
          </div>

          <button className="modal-footer-close" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;