import React, { useState } from 'react';
import { formatReleaseDate, formateRating } from "../utilities/toolbelt";
import "../components/Movies.css";
import { useNavigate } from 'react-router-dom';
import { IMG_URL } from "../globals/globals"
import FavouriteButton from "./FavouriteButton"

function MovieCard({ movie }) {
    const navigate =useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div onClick={()=>navigate(`/movie/${movie.id}`)}
            className="movie-card"
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={`${IMG_URL}w342${movie.poster_path}`} alt={movie.title} />
            <div className={`movie-overlay ${isHovered ? 'hovered' : ''}`} >
                <h2 className="movie-title">{movie.title}</h2>
                <p className="movie-release">{formatReleaseDate(movie.release_date)}</p>
                
                <p className="movie-rating">⭐ {formateRating(movie.vote_average)}</p>
                <FavouriteButton movie={movie} />
            </div>
        </div>
    );
}

export default MovieCard;

