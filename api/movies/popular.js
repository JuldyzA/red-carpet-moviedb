import { tmdbHandler } from "../_tmdb.js";

export default function handler(request, response) {
  return tmdbHandler(request, response, "/movie/popular");
}
