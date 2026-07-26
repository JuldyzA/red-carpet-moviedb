import { useEffect, useState } from "react";
import { APP_TITLE as appTitle } from "../globals/globals";
import HeroSlider from "../components/HeroSlider";
import GenreChips from "../components/GenreChips";
import PosterRow from "../components/PosterRow";
import { fetchGenres, fetchPopular, fetchTopRated, fetchTrending, fetchUpcoming } from "../lib/tmdb";
import "./PageHome.css";

const PageHome = () => {
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = `${appTitle} - Home`;
  }, []);

  useEffect(() => {
    let isMounted = true;

    async function loadHomeData() {
      try {
        const [trendingData, popularData, topRatedData, upcomingData, genresData] = await Promise.all([
          fetchTrending("week"),
          fetchPopular(),
          fetchTopRated(),
          fetchUpcoming(),
          fetchGenres(),
        ]);

        if (!isMounted) {
          return;
        }

        setTrending(trendingData?.results || []);
        setPopular(popularData?.results || []);
        setTopRated(topRatedData?.results || []);
        setUpcoming(upcomingData?.results || []);
        setGenres(genresData?.genres || []);
      } catch (fetchError) {
        if (!isMounted) {
          return;
        }

        console.error("Error loading home page data:", fetchError);
        setError("We could not load the movie rows right now.");
      }
    }

    loadHomeData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <main className="home-page">
      <HeroSlider movies={trending} />

      <div className="home-page__content">
        <GenreChips genres={genres} />

        {error ? <p className="home-page__error">{error}</p> : null}

        <PosterRow id="trending" title="Trending Now" movies={trending} />
        <PosterRow id="popular" title="Popular Picks" movies={popular} />
        <PosterRow id="top-rated" title="Top Rated" movies={topRated} />
        <PosterRow id="upcoming" title="Upcoming" movies={upcoming} />
      </div>
    </main>
  );
};

export default PageHome;
