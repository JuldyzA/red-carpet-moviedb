import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FavouriteButton from "./FavouriteButton";
import { backdropUrl } from "../lib/tmdb";

function PlayIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" width="16" height="16" fill="currentColor">
      <path d="M7.25 4.83v10.34c0 .66.73 1.06 1.28.71l8.08-5.17a.85.85 0 0 0 0-1.42L8.53 4.12a.85.85 0 0 0-1.28.71Z" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" width="16" height="16" fill="currentColor">
      <path d="M10 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Zm0 3.3a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Zm1.25 10.2H8.75v-1.2h.75V9.7h-.75V8.5h2.5v5.3h.75v1.2Z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" width="14" height="14" fill="currentColor">
      <path d="m10 1.9 2.45 4.97 5.49.8-3.97 3.86.94 5.47L10 14.45l-4.91 2.58.94-5.47L2.06 7.67l5.49-.8L10 1.9Z" />
    </svg>
  );
}

export default function HeroSlider({ movies = [] }) {
  const slides = movies.filter((movie) => movie.backdrop_path || movie.poster_path).slice(0, 5);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [slides.length]);

  if (!slides.length) {
    return <section className="hero-slider hero-slider--loading" aria-busy="true" />;
  }

  const activeMovie = slides[currentIndex];
  const releaseYear = activeMovie.release_date ? activeMovie.release_date.slice(0, 4) : "—";
  const rating = typeof activeMovie.vote_average === "number" ? activeMovie.vote_average.toFixed(1) : "N/A";

  return (
    <section className="hero-slider" aria-label="Featured movie carousel">
      <div className="hero-slider__media" aria-hidden="true">
        {slides.map((movie, index) => (
          <img
            key={movie.id}
            src={backdropUrl(movie.backdrop_path) || backdropUrl(movie.poster_path)}
            alt=""
            className={`hero-slider__image ${index === currentIndex ? "is-active" : ""}`}
          />
        ))}
      </div>

      <div className="hero-slider__overlay hero-slider__overlay--bottom" />
      <div className="hero-slider__overlay hero-slider__overlay--left" />

      <div className="hero-slider__content">
        <div className="hero-slider__eyebrow">Featured Tonight</div>
        <div key={activeMovie.id} className="hero-slider__copy">
          <h1 className="hero-slider__title font-display italic">{activeMovie.title}</h1>

          <div className="hero-slider__meta">
            <span className="hero-slider__rating">
              <StarIcon />
              {rating}
            </span>
            <span>{releaseYear}</span>
          </div>

          <p className="hero-slider__overview">
            {activeMovie.overview || "A striking featured selection from the TMDB catalogue."}
          </p>

          <div className="hero-slider__actions">
            <Link to={`/movie/${activeMovie.id}`} className="hero-button hero-button--primary">
              <PlayIcon />
              Watch Details
            </Link>

            <Link to={`/movie/${activeMovie.id}`} className="hero-button hero-button--ghost">
              <InfoIcon />
              More Info
            </Link>

            <FavouriteButton movie={activeMovie} className="hero-slider__favorite" />
          </div>
        </div>
      </div>

      <div className="hero-slider__dots" aria-label="Slide navigation">
        {slides.map((movie, index) => (
          <button
            key={movie.id}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className={`hero-slider__dot ${index === currentIndex ? "is-active" : ""}`}
            aria-label={`Show slide for ${movie.title}`}
          />
        ))}
      </div>
    </section>
  );
}