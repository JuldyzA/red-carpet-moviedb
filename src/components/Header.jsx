import Nav from './Nav';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    
    return (
        <header>
            <div className='navigation-container'>
                <button type="button" className="brand-mark" onClick={() => navigate('/')} aria-label="Go to home page">
                    <img src="/favicon.svg" alt="RC RedCarpet logo" className="brand-mark__icon" />
                    <span className="brand-mark__name">RC RedCarpet</span>
                </button>
                <Nav />
            </div>
        </header>
    );
}

export default Header;