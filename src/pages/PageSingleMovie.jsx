
import { useEffect, useState } from "react"; 
import { appTitle } from "../globals/globals";
import { useParams } from "react-router-dom";
import api from "../utilities/api";
const { getMovieId, getMovieVideos } = api;
import "./PageSingleMovie.css";
import { formateRating, formatReleaseDate } from "../utilities/toolbelt";

const PageSingleMovie = () => {
  useEffect(() => {
    document.title = `${appTitle} - Single Movie`;
  }, []);

  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailerId, setTrailerId] = useState(null);

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

    getMovieVideos(id)
      .then((videoData) => {
        const trailer = videoData.results.find(video => video.type === "Trailer" && video.site === "YouTube");
        if (trailer) {
          setTrailerId(trailer.key);
        }
      })
      .catch((error) => {
        alert("Error fetching movie videos:", error);
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
        <div className="single-movie-details-container">
        <div className="s-movie-image">
            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
        </div>
        <div className="s-movie-description">
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
        </div>
      </div>
      ) : (
        <p>Loading movie details...</p>
      )}
    </div>
    <div className="emdeb-trailer">
      <h2>Trailer</h2>
      {trailerId ? (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${trailerId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Trailer not available</p>
      )}
    </div>
    <div className="single-movie-cast">
      <h2>Cast</h2>
      <p>Cast goes here</p>
    </div>
    <div className="single-movie-similar">
      <h2>Similar Movies</h2>
      <p>Similar movies go here</p>
    </div>
    </>
  );
};

export default PageSingleMovie;

