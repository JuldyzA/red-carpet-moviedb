const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

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
  const response = await fetch(`/api${endpoint}${buildQueryString(params)}`);

  if (!response.ok) {
    throw new Error(`Backend request failed: ${response.status}`);
  }

  return response.json();
}

async function requestJson({ backendEndpoint, params = {} }) {
  return fetchFromBackend(backendEndpoint, params);
}

export function fetchTrending(window = "week") {
  return requestJson({
    backendEndpoint: "/trending",
    params: { window, language: "en-US" },
  });
}

export function fetchPopular() {
  return requestJson({
    backendEndpoint: "/movies/popular",
    params: { language: "en-US" },
  });
}

export function fetchTopRated() {
  return requestJson({
    backendEndpoint: "/movies/top-rated",
    params: { language: "en-US" },
  });
}

export function fetchUpcoming() {
  return requestJson({
    backendEndpoint: "/movies/upcoming",
    params: { language: "en-US" },
  });
}

export function fetchGenres() {
  return requestJson({
    backendEndpoint: "/genres",
    params: { language: "en-US" },
  });
}