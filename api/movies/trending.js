import { tmdbHandler } from "../../_tmdb.js";

export default function handler(request, response) {
  const window = request.query.window || "week";

  if (window !== "day" && window !== "week") {
    return response.status(400).json({ error: "Invalid trending window" });
  }

  return tmdbHandler(request, response, `/trending/movie/${window}`);
}
