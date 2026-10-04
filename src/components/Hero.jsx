import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">DISCOVER MOVIES</h1>
        <p className="hero-description">
          Explore and discover your favorite movies from around the world.
        </p>
        <button className="hero-btn" onClick={() => navigate('/movies')}>
          Explore Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
