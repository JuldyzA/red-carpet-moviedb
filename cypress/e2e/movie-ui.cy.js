describe("Movie UI", () => {
  it("TC01:opens the Movie DB application", () => {
    cy.visit("/");
    cy.get(".brand-mark__name")
      .should("be.visible")
      .and("contain.text", "RC RedCarpet")
      .and("have.css", "color", "rgb(245, 245, 245)");
    cy.contains("About").should("be.visible");
    cy.contains("Favourites").should("be.visible");
    cy.contains("Browse by Genre").should("be.visible");
    cy.contains("Collection").should("be.visible");
  });

  it("TC02:displays movie cards on the landing page", ()=>{
    cy.visit("/")
    cy.get(".poster-card").should("have.length.at.least", 1)
    cy.get(".favourite-button").first().should("be.visible")
    cy.get(".poster-card").first().find(".poster-card__image")
    .should("be.visible")
    .and("have.attr", "src")
    .and("include", "https")
  });

  it("TC03:opens movie details when poster card is clicked", () =>{
    cy.visit("/")
    cy.get(".poster-card").first().click();
    cy.url().should("include", "/movie");
    cy.get(".s-movie-rating").should("be.visible")
    cy.get(".favourite-button").should("be.visible")
    cy.get(".s-movie-title").should("be.visible").and("have.length", 1)
  });

  it("TC04:verify movie details are displayed correctly", () => {
    cy.visit("/");

    cy.get(".poster-card").first().click();

    // Title
    cy.get(".s-movie-title h3")
      .should("be.visible")
      .and("not.be.empty");

    // Release date
    cy.get(".s-movie-title .date")
      .should("be.visible")
      .invoke("text")
      .should("match", /^\d{4}-\d{2}-\d{2}$/);

    // Poster
    cy.get(".s-movie-image img")
      .should("be.visible")
      .and("have.attr", "src");

    // Overview
    cy.get(".s-movie-title p").eq(1)
      .should("be.visible")
      .and("not.be.empty")
      ;

    // Rating
    cy.get(".s-movie-rating")
      .should("be.visible")
      .and("not.be.empty");
  
     //Trailer
     cy.get(".trailer-section")
     .should("be.visible")
     .and("contain.text", "Trailer")

     //Trailer youtube video
     cy.get(".trailer-section iframe")
     .should("be.visible")
     .and("have.attr", "src")

     //Trailer youtube video container
     cy.get(".trailer-section iframe")
     .should("have.css", "max-width", "960px")
     
     //Cast section
     cy.get(".single-movie-cast")
     .should("be.visible")
     .and("contain.text", "Cast")

     //Actor card
     cy.get(".cast-list").find(".cast-member")
     .should("be.visible")
     .and("have.length.at.least", 1)
     
     //Actor image
     cy.get(".cast-list").find(".cast-member")
     .first()
     .find("img")
     .should("be.visible")
     .and("have.attr", "src")

     //Actor name
     cy.get(".cast-list .cast-member")
     .first()
     .find("p")
     .should("be.visible")
     .and("not.be.empty")
  });
  it("TC09: navigates correctly between Home, Movie Details, and Favourites", () => {
  cy.visit("/");

  // Home page loads correctly
  cy.url().should("eq", Cypress.config().baseUrl + "/");
  cy.get(".poster-card").should("have.length.greaterThan", 0);

  // Home -> Movie Details
  let movieTitle;
  cy.get(".poster-card").first().within(() => {
    cy.get(".poster-card__title").invoke("text").then((text) => {
      movieTitle = text.trim();
    });
  });

  cy.get(".poster-card").first().click();

  cy.url().should("include", "/movie/");
  cy.then(() => {
    cy.get(".s-movie-title").should("contain.text", movieTitle);
  });

  // Movie Details -> Favourites
  cy.get('a[href="/favourites"]').click();
  cy.url().should("include", "/favourites");
  cy.get("h1").should("be.visible").and("contain", "Favourites");

  // Favourites -> Home (confirm the loop closes correctly)
  cy.get(".brand-mark").click();
  cy.url().should("eq", Cypress.config().baseUrl + "/");
  cy.get(".poster-card").should("have.length.greaterThan", 0);
  });
  it("TC10: loads movie data from the TMDB API and displays it correctly", () => {
  // 1. Start watching for the API call BEFORE the page makes it
  cy.intercept("GET", "**/api.themoviedb.org/3/trending/movie/week*").as("trendingMovies");

  cy.visit("/");

  // 2. Wait for that specific network call to actually complete
  cy.wait("@trendingMovies").then((interception) => {
    // 3. Assert on the RAW API response itself
    expect(interception.response.statusCode).to.eq(200);
    expect(interception.response.body.results).to.be.an("array").and.not.be.empty;

    // 4. Capture real data from the response to cross-check against the UI
    const firstMovie = interception.response.body.results[0];

    // 5. Assert the UI actually reflects that real API data

    cy.get(".poster-card").first().within(() => {
      cy.get(".poster-card__title").should("contain.text", firstMovie.title);
    });
  });
  });
  });
