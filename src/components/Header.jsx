import Nav from './Nav';
import { appTitle } from '../globals/globals';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../images/RedCarpetLogo.svg';
import logoFull from '../images/RedCarpetLogoFull.svg';

const Header = () => {
    const navigate = useNavigate();
    
    return (
        <header>
            <div className='navigation-container'>
                <img src={logo} alt="logo" className='logo' onClick={() => navigate('/')} />
                <Nav />
            </div>
        </header>
    );
}

export default Header;