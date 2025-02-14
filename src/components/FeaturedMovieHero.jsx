import api from "../utilities/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IMG_URL } from "../globals/globals";
import RatingCircle from "./RatingCircle";
const { getTrendingMovies } = api;


// The carousel component and timer was created by Cursor AI, with some helpful and specific prompting from Angus ;)


const FeaturedMovieHero = () => {
    const navigate = useNavigate();
    const [featuredMovies, setFeaturedMovies] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        getTrendingMovies()
        .then((data) => {
            // get the first 4 movies from the results array
            setFeaturedMovies(data.results.slice(0, 4));
        })
        .catch((error) => {
            console.error("Error fetching trending movies:", error);
        });
    }, []);

    
     // Add useEffect for auto-advancing timer
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === featuredMovies.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        // Cleanup timer on component unmount
        return () => clearInterval(timer);
    }, [featuredMovies]);

    if (featuredMovies.length === 0) return null;

    return (
        <div className="featured-movie-hero">
            <div 
                onClick={() => navigate(`/movie/${featuredMovies[currentIndex].id}`)}
                className="featured-movie-content"
                
            >
                <img 
                    src={`${IMG_URL}original${featuredMovies[currentIndex].backdrop_path}`} 
                    alt={featuredMovies[currentIndex].title} 
                />
                <div className="featured-movie-overlay">
                    <h2 className="featured-movie-title">{featuredMovies[currentIndex].title}</h2>
                    <div className="featured-movie-rating">
                        <RatingCircle 
                            className="featured-movie-rating-circle" 
                            rating={featuredMovies[currentIndex].vote_average} 
                        />
                    </div>
                </div>
            </div>
            <div className="pagination-dots">
                {featuredMovies.map((_, index) => (
                    <button
                        key={index}
                        className={`pagination-dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            setCurrentIndex(index);
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default FeaturedMovieHero;
