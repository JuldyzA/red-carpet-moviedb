import { Link } from "react-router-dom";
import FavouriteButton from "./FavouriteButton";
import { posterUrl } from "../lib/tmdb";

export default function PosterCard({ movie }) {
  const releaseYear = movie.release_date ? movie.release_date.slice(0, 4) : "TBA";
  const rating = typeof movie.vote_average === "number" ? movie.vote_average.toFixed(1) : "N/A";

  return (
    <article className="poster-card">
      <Link to={`/movie/${movie.id}`} className="poster-card__link">
        <div className="poster-card__media">
          {movie.poster_path ? (
            <img src={posterUrl(movie.poster_path)} alt={movie.title} className="poster-card__image" />
          ) : (
            <div className="poster-card__fallback">No poster available</div>
          )}
        </div>

        <div className="poster-card__meta">
          <h3 className="poster-card__title">{movie.title}</h3>
          <div className="poster-card__subline">
            <span>{releaseYear}</span>
            <span>{rating}</span>
          </div>
        </div>
      </Link>

      <FavouriteButton movie={movie} className="poster-card__favorite" />
    </article>
  );
}