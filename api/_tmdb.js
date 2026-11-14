const TMDB_BASE_URL = "https://api.themoviedb.org/3";

export async function tmdbHandler(request, response, tmdbPath) {
  if (!process.env.TMDB_API_KEY) {
    return response.status(500).json({ error: "TMDB_API_KEY is not configured" });
  }

  const query = new URLSearchParams(request.url.split("?")[1] || "");
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
