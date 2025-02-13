import api from "../utilities/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IMG_URL } from "../globals/globals";
const { getTrendingMovies } = api;





const FeaturedMovieHero = () => {
    const navigate = useNavigate();
    const [featuredMovie, setFeaturedMovie] = useState(null);

    useEffect(() => {
        getTrendingMovies()
        .then((data) => {
            // get the first movie from the results array
            setFeaturedMovie(data.results[0]);
        })
        .catch((error) => {
            console.error("Error fetching trending movies:", error);
        });
    }, []);

    if (!featuredMovie) return null;

    return (
        <div 
            onClick={() => navigate(`/movie/${featuredMovie.id}`)}
            className="featured-movie-hero"
        >
            <div className="featured-movie-content">
                <img 
                    src={`${IMG_URL}original${featuredMovie.backdrop_path}`} 
                    alt={featuredMovie.title} 
                />
                <h2 className="featured-movie-title">{featuredMovie.title}</h2>
            </div>
        </div>
    );
}

export default FeaturedMovieHero;
