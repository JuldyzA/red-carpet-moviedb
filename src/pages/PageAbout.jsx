import { useEffect } from 'react';
import { appTitle } from '../globals/globals';
import logoFull from '../images/RedCarpetLogoFull.svg';
import './PageAbout.css';

function PageAbout() {


  useEffect(() => {
    document.title = `${appTitle} - About`;
  }, []);

  const aboutImageURL = 'https://images.pexels.com/photos/18833268/pexels-photo-18833268/free-photo-of-classic-yellow-car-on-city-street-in-rain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  const aboutImageLocal = './about-background.jpg';
  return (
    <>
      <div
        className="about-hero"
        style={{
          backgroundImage: `url(${aboutImageLocal})`,
        }}
      >
        <div className='about-container'>
          <img src={logoFull} alt="logo-full" className='about-logo-full' />
          <section className='about-text-section'>

          <h1>About Red Carpet</h1>
          <p>Red Carpet is a movie database that allows users to search for movies, view movie details, and save their favorite movies.
          Immerse yourself in the world of cinema with Red Carpet. Discover new films, revisit classics, and keep track of your favorites all in one place.
          <br />
          <br />
          This product uses the TMDb API but is not endorsed or certified by TMDb.
          </p>
          </section>

          <img className='tmdb-logo' width='154' height='20'
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="tmdb-logo" />
        </div>
      </div>
    </>
  )
}

export default PageAbout
