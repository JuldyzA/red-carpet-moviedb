import React, { useState } from 'react';
import { formatReleaseDate, formateRating } from "../utilities/toolbelt";
import "../components/Movies.css";
import { useNavigate } from 'react-router-dom';
import FavouriteButton from './FavouriteButton';
import RatingCircle from './RatingCircle';

function MovieCard({ movie }) {
    const navigate =useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div onClick={()=>navigate(`/movie/${movie.id}`)}
            className="movie-card"
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
            <div className={`movie-overlay ${isHovered ? 'hovered' : ''}`} >
                <h2 className="movie-title">{movie.title}</h2>
                <p className="movie-release">{formatReleaseDate(movie.release_date)}</p>
                <div className="rating-and-favourite">
                    <RatingCircle className="hovered-movie-rating" rating={movie.vote_average} />
                    <FavouriteButton movie={movie} />
                </div>
            </div>
        </div>
    );
}

export default MovieCard;

