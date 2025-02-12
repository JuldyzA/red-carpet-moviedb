
import React from 'react';
import "./Movies.css";
import MovieCard from './MovieCard';

function Movies({ title, movies }) {
    const movieList = Array.isArray(movies) ? movies : [];

    return (
        <div className='movies-container'>
            {/* <h1>{title}</h1> */}
            <div className="movies-grid">
                {movieList.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default Movies;
 