import { describe } from "zod/v4/core";

describe("Favourites functionality", () => {
    describe("Adding favorites"),() =>{
         it("TC05:add a movie to favourites", () => {
    cy.visit("/")
    cy.get(".favourite-button").eq(1).click()
    cy.get(".favourite-button").eq(1).should("have.attr", "aria-label")
    .and("contain", "Remove")
  });
  it("TC06:verifies the selected movie appears in favourites",()=>{
    cy.visit("/");
    //select one movie and capture its title
    cy.get(".poster-card").eq(1)
    .find(".poster-catd_title").invoke("text")
        .then((title)=>{
            const movieTitle = title.trim();

            //add selected movie to fav
            cy.get(".favourite-button").click();
            cy.get("favourite-button")
                .should("have.attr", "aria-label")
                .and("contain", "Remove");
            
            //navigate to fav page
            cy.get('a[href="/favourites"]').click();

            //verify the same movie is displayed
            cy.contains(".movie-item", movieTitle). should("be.visible");
            
        });
    });
  it("TC06:verify if movie is visible on the favorite page", () =>{
    cy.visit("/");
    cy.get(".favourite-button").eq(1).click();
    cy.get(".favourite-button").eq(1)
    .invoke('attr', 'aria-label')
    .should('contain', 'Remove');

    //Go to Favourites page
    cy.get('a[href="/favourites"]').click();
    cy.url().should('include', '/favourites');
    
  //Favourites page title
  cy.get("h1").should("be.visible").and("contain", "Favourites")
  
  //verify a movie is displayed on the favourite page
    cy.get(".movie-card img").should('be.visible')
  }); 
    };
    describe("Removing favorites"),()=>{
        it("TC07:removes a movie from the favourites page", () => {
    cy.visit("/");
    let movieTitle;

    //Capturing first movie card's title
    cy.get(".poster-card").eq(1).within(()=> {
      //Capture title and click the same card'd favourite button
      cy.get(".poster-card__title").invoke("text").then((text)=> {movieTitle = text.trim();
      
      cy.get(".favourite-button").click();
      cy.get(".favourite-button").should("have.attr", "aria-label")
          .and("contain", "Remove");
    });
    })

    // 2. Go to Favourites page
    cy.get('a[href="/favourites"]').click();
    cy.url().should('include', '/favourites');
    cy.get("h1").should("be.visible").and("contain", "Favourites");
    cy.get(".movie-card img").should('be.visible');
       // 3. Verify movie is visible
    cy.then(() => {
    cy.contains(".movie-item", movieTitle).should("exist");
    cy.contains(".movie-item", movieTitle).trigger('mouseover');
    cy.contains(".movie-item", movieTitle)
      .find(".favourite-button")
      .should("be.visible")
      .and("have.attr", "aria-label")
      .and("contain", "Remove")

    // 4. Remove the movie from favourites
    
    cy.contains(".movie-card", movieTitle).find(".favourite-button").click();
    // 7. Verify the movie is removed from the page
    cy.contains(".movie-card", movieTitle).should("not.exist");
  }); 
    // Optional: Verify the list is empty
    cy.contains("You have not added any favourite movies.").should("be.visible");
    });

        it("TC08: shows empty state after removing the last favourite", () => {

  // Open homepage
  cy.visit("/");

  // Find one movie card and add it to favourites
  cy.get(".poster-card").first().within(() => {
    cy.get(".favourite-button").click();
  });

  //verify if movie is added to favourites
  cy.get(".favourite-button")
  .should("have.attr", "aria-label")
    .and("contain", "Remove");

  // Navigate to Favourites page
  cy.get('a[href="/favourites"]').click();

  // Verify that one movie exists
  cy.get(".movie-item").should("have.length", 1);

  //hover over movie card
  cy.get(".movie-item").first().find(".movie-card").realHover();

  // Click the favourite button inside the overlay
  cy.get(".movie-item").first()
  .find(".movie-overlay .favourite-button")
  .should("have.length",1)
  .should("be.visible")
  .click();

// Verify the movie has disappeared
  cy.get(".movie-item")
  .should("not.exist");

// Verify the empty-state message
  cy.contains("You have not added any favourite movies.")
  .should("be.visible");
    });
    };

});