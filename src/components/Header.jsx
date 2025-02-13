
import Nav from './Nav';
import { appTitle } from '../globals/globals';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <div className='navigation-container'>
            <NavLink className='app-title' to="/">{appTitle}</NavLink>
            <Nav />
        </div>
    </header>
);

export default Header;