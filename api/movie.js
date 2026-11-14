import { tmdbHandler } from "./_tmdb.js";

function getMovieId(request, response) {
  const movieId = new URL(request.url, "http://localhost").searchParams.get("id");

  if (!movieId || !/^\d+$/.test(movieId)) {
    response.status(400).json({ error: "A valid movie id is required" });
    return null;
  }

  return movieId;
}

export default function handler(request, response) {
  const movieId = getMovieId(request, response);
  return movieId ? tmdbHandler(request, response, `/movie/${movieId}`) : undefined;
}
