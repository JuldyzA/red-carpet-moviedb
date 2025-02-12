import { createContext, useEffect, useState } from "react";

const GlobalContext = createContext()

function GlobalProvider( { children }) {
    const [favourites, setFavourites] = useState(loadFavsFromLocalStorage())
    // favs will store a bunch of movieData objects

    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites))
    }, [favourites])

    function loadFavsFromLocalStorage(){
        const favs = localStorage.getItem("favourites")
        if (favs) {
            return JSON.parse(favs)
        } else {
            return []
        }
    }

    function addFavourite(movie){
        setFavourites([...favourites, movie])
    }
    function removeFavourite(movie){
        // filter out the movie that we want to remove based on the id
        setFavourites(favourites.filter((fav) => fav.id !== movie.id))
        // condition in plain english: if movie id is not the same as the movie we want to remove, keep it
    }

    return <GlobalContext.Provider value={{favourites, addFavourite, removeFavourite}}>
            {children}
           </GlobalContext.Provider>

}

export { GlobalContext, GlobalProvider}