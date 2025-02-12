
import { useEffect, useContext } from "react";
import { appTitle } from "../globals/globals";
import { GlobalContext } from "../context/GlobalContext";
import MovieCard from "../components/MovieCard";

const PageFavourites = () => {
  const { favourites } = useContext(GlobalContext)

  return (
    <main id="home">
              <div>
            <h1>Favourites</h1>
            {favourites.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    </main>
  );
};

export default PageFavourites;
