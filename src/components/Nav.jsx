import { NavLink } from 'react-router-dom';

const Nav = () => (
    <nav>
    <ul>
      {/* <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
      <li><NavLink to="/movie" activeClassName="active">Single Page</NavLink></li> */}
      <li><NavLink to="/about-us" className={({ isActive }) => isActive ? "active" : ""}>About Us</NavLink></li>
      <li><NavLink to="/favourites" className={({ isActive }) => isActive ? "active" : ""}>Favourites</NavLink></li>
    </ul>
  </nav>
);

export default Nav;