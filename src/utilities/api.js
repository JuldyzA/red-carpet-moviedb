
const BASE_URL = "/api";

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
  return fetch(`${BASE_URL}/movie/${id}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data = response.json();
    return data;
  })

}

async function getHeroImagePopular() {
  const response = await fetch(`${BASE_URL}/movies/popular`);
  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}

async function getPopularMovies() {
  const response = await fetch(`${BASE_URL}/movies/popular`);
  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}

async function getTopRatedMovies() {
  const response = await fetch(`${BASE_URL}/movies/top-rated`);
  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}
async function getNowPlayingMovies() {
  const response = await fetch(`${BASE_URL}/movies/now-playing`);
  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}
async function getUpcomingMovies() {
  const response = await fetch(`${BASE_URL}/movies/upcoming`);
  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}
async function getMovieVideos(id) {
  const response = await fetch(`${BASE_URL}/movie/${id}/videos`);
  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}

async function getTrendingMovies() {
  const response = await fetch(`${BASE_URL}/movies/trending?window=day`);
  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
}


// get the first 5 cast members for a movie
  async function getCastMembers(movieId) {
    const response = await fetch(`${BASE_URL}/movie/${movieId}/credits`);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data = await response.json();
    return data.cast.slice(0, 5);
  }



export default {getPopularMovies, 
  getMovieId, 
  getTopRatedMovies, 
  getNowPlayingMovies, 
  getUpcomingMovies,
  getHeroImagePopular,
  getMovieVideos,
  getTrendingMovies,
  getCastMembers
};