
//const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_KEY="73771e79256e3d0bfcaac18a4560a8a7";
const BASE_URL = "https://api.themoviedb.org/3"

// "images": {
//     "base_url": "http://image.tmdb.org/t/p/",
//     "secure_base_url": "https://image.tmdb.org/t/p/",
//     "backdrop_sizes": [
//       "w300",
//       "w780",
//       "w1280",
//       "original"
//     ],
//     "logo_sizes": [
//       "w45",
//       "w92",
//       "w154",
//       "w185",
//       "w300",
//       "w500",
//       "original"
//     ],
//     "poster_sizes": [
//       "w92",
//       "w154",
//       "w185",
//       "w342",
//       "w500",
//       "w780",
//       "original"
//     ],
//     "profile_sizes": [
//       "w45",
//       "w185",
//       "h632",
//       "original"
//     ],
//     "still_sizes": [
//       "w92",
//       "w185",
//       "w300",
//       "original"
//     ]
//   }
function getMovieId(id){
  return fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data = response.json();
    return data;
  })

}

async function getHeroImagePopular() {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}

async function getPopularMovies() {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}

async function getTopRatedMovies() {
  const response = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}
async function getNowPlayingMovies() {
  const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}
async function getUpcomingMovies() {
  const response = await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}

async function getTrendingMovies() {
  const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}




export default {getPopularMovies, getMovieId, 
  getTopRatedMovies, 
  getNowPlayingMovies, 
  getUpcomingMovies,
  getHeroImagePopular,
  getTrendingMovies
};