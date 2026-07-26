const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BACKEND_URL = (import.meta.env.VITE_BACKEND_URL || "").replace(/\/$/, "");

export const posterUrl = (path) => (path ? `${TMDB_IMAGE_BASE_URL}/w500${path}` : null);
export const backdropUrl = (path) => (path ? `${TMDB_IMAGE_BASE_URL}/original${path}` : null);

function buildQueryString(params = {}) {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      searchParams.set(key, String(value));
    }
  });

  const query = searchParams.toString();
  return query ? `?${query}` : "";
}

async function fetchFromBackend(endpoint, params = {}) {
  const response = await fetch(`${BACKEND_URL}/api${endpoint}${buildQueryString(params)}`);

  if (!response.ok) {
    throw new Error(`Backend request failed: ${response.status}`);
  }

  return response.json();
}

async function fetchFromTmdb(endpoint, params = {}) {
  if (!TMDB_API_KEY) {
    throw new Error("Missing VITE_TMDB_API_KEY environment variable");
  }

  const response = await fetch(
    `${TMDB_BASE_URL}${endpoint}${buildQueryString({ ...params, api_key: TMDB_API_KEY })}`
  );

  if (!response.ok) {
    throw new Error(`TMDB request failed: ${response.status}`);
  }

  return response.json();
}

async function requestJson({ backendEndpoint, tmdbEndpoint, params = {} }) {
  if (BACKEND_URL) {
    try {
      return await fetchFromBackend(backendEndpoint, params);
    } catch (error) {
      console.warn("Falling back to TMDB after backend request failure.", error);
    }
  }

  return fetchFromTmdb(tmdbEndpoint, params);
}

export function fetchTrending(window = "week") {
  return requestJson({
    backendEndpoint: "/movies/trending",
    tmdbEndpoint: `/trending/movie/${window}`,
    params: { window, language: "en-US" },
  });
}

export function fetchPopular() {
  return requestJson({
    backendEndpoint: "/movies/popular",
    tmdbEndpoint: "/movie/popular",
    params: { language: "en-US" },
  });
}

export function fetchTopRated() {
  return requestJson({
    backendEndpoint: "/movies/top-rated",
    tmdbEndpoint: "/movie/top_rated",
    params: { language: "en-US" },
  });
}

export function fetchUpcoming() {
  return requestJson({
    backendEndpoint: "/movies/upcoming",
    tmdbEndpoint: "/movie/upcoming",
    params: { language: "en-US" },
  });
}

export function fetchGenres() {
  return requestJson({
    backendEndpoint: "/genres/movie/list",
    tmdbEndpoint: "/genre/movie/list",
    params: { language: "en-US" },
  });
}