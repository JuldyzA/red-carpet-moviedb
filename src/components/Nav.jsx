import { NavLink } from 'react-router-dom';

const Nav = () => (
    <nav>
    <ul>
      <li><NavLink to="/about-us" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></li>
      <li><NavLink to="/favourites" className={({ isActive }) => isActive ? "active" : ""}>Favourites</NavLink></li>
    </ul>
  </nav>
);

export default Nav;