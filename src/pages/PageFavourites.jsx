
import { useEffect, useContext } from "react";
import { appTitle } from "../globals/globals";
import { GlobalContext } from "../context/GlobalContext";
import MovieCard from "../components/MovieCard";
import FavouriteButton from "../components/FavouriteButton";
import "../pages/PageFavourites.css"
import "../components/Movies.css";
import { formatReleaseDate, formateRating } from "../utilities/toolbelt";
import Movies from "../components/Movies";
import RatingCircle from "../components/RatingCircle";
const PageFavourites = () => {
  const { favourites } = useContext(GlobalContext)

  return (
    <main id="home">
      <h1>Favourites</h1>
      <p>
      {favourites.length === 0 
          ? "You have not added any favourite movies."
          : "All your favourite movies."}
      </p>
      <div className="favourites-container">
        <div className="favourites-grid">
            {favourites.map((movie) => (
                <div className="movie-item" key={movie.id}>
                <MovieCard movie={movie} />
                <div className="movie-info"> {/* HIDE THIS FOR DESKTOP VIEW */}
                  <FavouriteButton movie={movie} />
                    <h2>{movie.title}</h2>
                    <p className="movie-release">{formatReleaseDate(movie.release_date)}</p>
                    <RatingCircle rating={movie.vote_average} />
                </div>
            </div>
            ))}
        </div>    
      </div>
    </main>
  );
};

export default PageFavourites;
