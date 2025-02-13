import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
import Nav from './Nav';
import { appTitle } from '../globals/globals';


const Header = () => (
    <header>
        <div className='logo'>

            <h1><Link to="/">{appTitle}</Link></h1>
    
        <Nav />
        </div>
    </header>
);

export default Header;