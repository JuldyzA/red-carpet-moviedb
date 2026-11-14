>>Red Carpet Movie DB

Red Carpet Movie DB is a React-based movie application that uses the **TMDB API** to display current movie information.

Users can browse movies by categories such as **Trending, Popular, Top Rated, and Upcoming**, view detailed movie information, and save movies to their favourites.

>>Live Demo

Add your deployed application link here:

`https://red-carpet-moviedb.vercel.app/`

>>Technologies

- React
- JavaScript
- Vite
- CSS
- TMDB API
- Local Storage
- Git / GitHub

>>Features

- Browse trending movies
- Browse popular movies
- Browse top-rated movies
- Browse upcoming movies
- View detailed information about a selected movie
- View movie rating, release date, overview, and poster
- Add movies to favourites
- Remove movies from favourites
- Store favourites using Local Storage
- Responsive user interface

>>Testing

I added automated testing using **Cypress** to implement both UI and API testing.

The test suite covers important user flows and verifies that the application communicates correctly with the TMDB API.

>>UI / End-to-End Testing

Examples of tested scenarios:

- Verify that the movie application loads successfully
- Verify that movie cards are displayed
- Open a movie details page
- Verify movie title, poster, overview, rating, and release date
- Add a movie to favourites
- Verify that the movie appears on the Favourites page
- Remove a movie from favourites
- Verify that the movie is removed successfully

>>API Testing

Cypress is also used to test TMDB API responses.

Examples include:

- Verify that TMDB requests return a `200` status code
- Verify that the response contains movie data
- Validate important response properties such as:
  - `id`
  - `title`
  - `overview`
  - `vote_average`
  - `release_date`
- Compare API movie data with information displayed in the UI

>>Network Testing

I also use `cy.intercept()` to monitor requests sent from the application to the TMDB API.

This allows the tests to verify that:

- the application sends the expected API request
- the server returns a successful response
- the returned movie data is correctly displayed in the UI

>>Cypress Test Structure

```text
cypress/
├── e2e/
│   ├── movie-search.cy.js
│   └── movie-api.cy.js
├── fixtures/
└── support/

cypress.config.js
```

>>Running the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application normally runs at:

```text
http://localhost:5173
```

>>Running Cypress Tests

Open Cypress in interactive mode:

```bash
npx cypress open
```

Run Cypress tests from the terminal:

```bash
npx cypress run
```

>>Environment Variables

The browser build uses a TMDB API key stored in a Vite environment variable.
The Cypress API tests use the non-public `TMDB_API_KEY` variable.

Example:

```text
VITE_TMDB_API_KEY=your_tmdb_api_key
```

For Cypress, add this to `.env` instead:

```text
TMDB_API_KEY=your_tmdb_api_key
```

The real API key is not committed to GitHub. `VITE_TMDB_API_KEY` is embedded
in the browser bundle by Vite, so it must be configured in Vercel for the
deployed app. Do not replace it with `TMDB_API_KEY` unless the app is changed
to use a server-side API proxy.

>>Project Purpose

This project originally focused on front-end development with React.

I later expanded it by adding a Cypress test suite to demonstrate my knowledge of:

- Manual QA concepts
- UI automation
- End-to-end testing
- API testing
- Network request validation
- Debugging
- Test case design
