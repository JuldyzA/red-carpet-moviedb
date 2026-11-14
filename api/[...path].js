const TMDB_BASE_URL = "https://api.themoviedb.org/3";

function getTmdbPath(path, query) {
  const requestedPath = path.join("/");

  const collectionRoutes = {
    "movies/popular": "/movie/popular",
    "movies/top-rated": "/movie/top_rated",
    "movies/upcoming": "/movie/upcoming",
    "movies/now-playing": "/movie/now_playing",
    "genres/movie/list": "/genre/movie/list",
  };

  if (requestedPath === "movies/trending") {
    const window = query.get("window") || "week";
    if (window !== "day" && window !== "week") {
      return null;
    }
    return `/trending/movie/${window}`;
  }

  if (collectionRoutes[requestedPath]) {
    return collectionRoutes[requestedPath];
  }

  if (path[0] === "movie" && /^\d+$/.test(path[1] || "")) {
    const suffix = path.slice(2).join("/");
    if (!["", "videos", "credits"].includes(suffix)) {
      return null;
    }
    return `/movie/${path[1]}${suffix ? `/${suffix}` : ""}`;
  }

  return null;
}

export default async function handler(request, response) {
  const path = Array.isArray(request.query.path) ? request.query.path : [request.query.path];
  const query = new URLSearchParams(request.url.split("?")[1] || "");
  const tmdbPath = getTmdbPath(path, query);

  if (!tmdbPath) {
    return response.status(404).json({ error: "Unknown API route" });
  }

  if (!process.env.TMDB_API_KEY) {
    return response.status(500).json({ error: "TMDB_API_KEY is not configured" });
  }

  query.delete("path");
  query.delete("window");
  query.set("api_key", process.env.TMDB_API_KEY);

  try {
    const tmdbResponse = await fetch(`${TMDB_BASE_URL}${tmdbPath}?${query.toString()}`);
    const data = await tmdbResponse.json();
    return response.status(tmdbResponse.status).json(data);
  } catch (error) {
    console.error("TMDB proxy request failed:", error);
    return response.status(502).json({ error: "TMDB request failed" });
  }
}
