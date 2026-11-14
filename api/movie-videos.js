import { tmdbHandler } from "./_tmdb.js";

export default function handler(request, response) {
  const movieId = new URL(request.url, "http://localhost").searchParams.get("id");

  if (!movieId || !/^\d+$/.test(movieId)) {
    return response.status(400).json({ error: "A valid movie id is required" });
  }

  return tmdbHandler(request, response, `/movie/${movieId}/videos`);
}
