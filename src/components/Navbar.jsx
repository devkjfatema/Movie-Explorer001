import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">🎬 MovieExplorer</div>
      <ul className="navbar-links">
        <li>
          <NavLink to="/" end>Home</NavLink>
        </li>
        <li>
          <NavLink to="/movies" className="nav-btn">Movies</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
