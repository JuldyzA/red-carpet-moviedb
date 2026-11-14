function getMovieUrl(movieId) {
  return `https://api.themoviedb.org/3/movie/${movieId}`;
}

export function getMovie(movieId) {
  return cy.env(["TMDB_API_KEY"]).then(({ TMDB_API_KEY }) => {
    return cy.request({
      method: "GET",
      url: getMovieUrl(movieId),
      qs: {
        api_key: TMDB_API_KEY
      },
      failOnStatusCode: false
    });
  });
}