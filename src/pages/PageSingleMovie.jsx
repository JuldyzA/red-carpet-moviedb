import { useEffect, useState } from "react"; 
import { appTitle } from "../globals/globals";
import { useParams } from "react-router-dom";
import api from "../utilities/api";
const { getMovieId } = api;
import "./PageSingleMovie.css";
import { formateRating, formatReleaseDate } from "../utilities/toolbelt";

const PageSingleMovie = () => {
  useEffect(() => {
    document.title = `${appTitle} - Single Movie`;
  }, []);

  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (!id) return; 

    getMovieId(id)
      .then((movieData) => {
        console.log(movieData);
        setMovie(movieData);
      })
      .catch((error) => {
        alert("Error fetching movie:", error);
      });
  }, [id]);

  return (
    <>
    <div id="single-movie-hero" 
    style={{
      backgroundImage: movie?.poster_path
        ? `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
        : "none", 
    }}>
    </div>
    <div className="single-movie-details-container">
      {movie ? (
        <div className="s-movie-image">
          <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
          <div>
            <h3 className="s-movie-title">{movie.title}</h3>
            <p className="s-movie-rating">Rating: {formateRating(movie.vote_average)}</p>
            <p className="s-movie-release-date">Release Date: {formatReleaseDate(movie.release_date)}</p>
            <p className="s-movie-overview">{movie.overview}</p>
          </div>
        </div>
      ) : (
        <p>Loading movie details...</p>
      )}
    </div>
    </>
    
  );
};

export default PageSingleMovie;
