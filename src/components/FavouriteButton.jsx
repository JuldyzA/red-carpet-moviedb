import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import "./FavouriteButton.css"

function FavouriteButton({ movie }){
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

    return <button onClick={handleClick}>{isFavourite ? "❤️" : "🤍"}  </button>
}

export default FavouriteButton