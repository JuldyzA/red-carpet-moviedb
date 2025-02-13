
import { useEffect, useContext } from "react";
import { appTitle } from "../globals/globals";
import { GlobalContext } from "../context/GlobalContext";
import MovieCard from "../components/MovieCard";
import FavouriteButton from "../components/FavouriteButton";
import "../pages/PageFavourites.css"
import "../components/Movies.css";
import { formatReleaseDate, formateRating } from "../utilities/toolbelt";
import Movies from "../components/Movies";

const PageFavourites = () => {
  const { favourites } = useContext(GlobalContext)

  return (
    <main id="home">
      <h1>Favourites</h1>
      <p>
        All your favourite movies.
      </p>
      <div className="favourites-container">
        <div className="favourites-grid">
            {favourites.map((movie) => (
                <div className="movie-item" key={movie.id}>
                <MovieCard movie={movie} />
                <div className="movie-info"> {/* HIDE THIS FOR DESKTOP VIEW */}
                    <h2>{movie.title}</h2>
                    <p className="movie-release">{formatReleaseDate(movie.release_date)}</p>
                    <p className="movie-rating">⭐ {formateRating(movie.vote_average)}</p>
                </div>
            </div>
            ))}
        </div>    
      </div>
    </main>
  );
};

export default PageFavourites;
