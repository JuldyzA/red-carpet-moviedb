import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import "./FavouriteButton.css"

function FavouriteButton({ movie, className = "" }){
    const { favourites, addFavourite, removeFavourite } = useContext(GlobalContext)

    // determine whether the movie was already in favs
    const isFavourite = favourites.find((fav) => {
        return fav.id === movie.id
    })

    function handleClick(event){
        event.stopPropagation()
        if(isFavourite){
            removeFavourite(movie)
        } else {
            addFavourite(movie)
        }
    }

        const buttonClassName = ["favourite-button", className].filter(Boolean).join(" ");

        return (
            <button
                type="button"
                className={buttonClassName}
                onClick={handleClick}
                aria-label={isFavourite ? `Remove ${movie.title} from favourites` : `Add ${movie.title} to favourites`}
            >
                <span aria-hidden="true">{isFavourite ? "♥" : "♡"}</span>
            </button>
        );
}

export default FavouriteButton