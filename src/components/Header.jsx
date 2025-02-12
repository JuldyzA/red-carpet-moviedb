import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import Nav from './Nav';
import { appTitle } from '../globals/globals';
// import "./Header.css"

const Header = () => (
    <header>
        <div className='logo'>
            <Link to="/">
                <img src={logo} alt="Logo movie" />
            </Link>
            <h1><Link to="/">{appTitle}</Link></h1>
    
        <Nav />
        </div>
    </header>
);

export default Header;