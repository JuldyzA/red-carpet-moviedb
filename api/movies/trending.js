import { tmdbHandler } from "../../_tmdb.js";

export default function handler(request, response) {
  const query = new URLSearchParams(request.url.split("?")[1] || "");
  const window = query.get("window") || "week";

  if (window !== "day" && window !== "week") {
    return response.status(400).json({ error: "Invalid trending window" });
  }

  return tmdbHandler(request, response, `/trending/movie/${window}`);
}
