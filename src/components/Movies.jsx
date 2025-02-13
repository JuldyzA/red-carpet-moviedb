import React from 'react';
import "./Movies.css";
import MovieCard from './MovieCard';
import { formatReleaseDate, formateRating } from "../utilities/toolbelt";

function Movies({ title, movies }) {
    const movieList = Array.isArray(movies) ? movies : [];

    return (
        <div className='movies-container'>
            <div className="movies-grid">
                {movieList.map((movie) => (
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
    );
}

export default Movies;
 