describe("Movie API", ()=>{
    it("TC01:returns movie data directly from the TMDB API",()=>{
    cy.env(["TMDB_API_KEY"]).then(({TMDB_API_KEY})=>{
      cy.request({
      method:"GET",
      url:"https://api.themoviedb.org/3/movie/popular",
      qs:{
        api_key: TMDB_API_KEY,
      }
    }).then((response)=>{
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("results");
      expect(response.body.results).to.be.an("array").and.not.be.empty;
      const firstMovie = response.body.results[0];
      expect(firstMovie).to.have.property("id");
      expect(firstMovie.id).to.be.a("number")
      expect(firstMovie).to.have.property("title");
      expect(firstMovie.title).to.be.a("string")
      expect(firstMovie).to.have.property("overview");
      expect(firstMovie.overview).to.be.a("string")
      expect(firstMovie).to.have.property("poster_path");
      expect(firstMovie.poster_path).to.be.a("string")
      expect(firstMovie).to.have.property("vote_average");
      expect(firstMovie.vote_average).to.be.a("number")
    });
    })
    });

    it("TC02:returns top rated movies",() => {
      cy.env(["TMDB_API_KEY"]).then(({TMDB_API_KEY}) => {
        cy.request({
          method: "GET",
          url: "https://api.themoviedb.org/3/movie/top_rated",
          qs: {
            api_key: TMDB_API_KEY,
          }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("results");
          expect(response.body.results).to.be.an("array").and.not.be.empty;
          const firstMovie = response.body.results[0];
          expect(firstMovie).to.have.property("id");
          expect(firstMovie.id).to.be.a("number")
          expect(firstMovie).to.have.property("title");
          expect(firstMovie.title).to.be.a("string")
          expect(firstMovie).to.have.property("overview");
          expect(firstMovie.overview).to.be.a("string")
          expect(firstMovie).to.have.property("poster_path");
          expect(firstMovie.poster_path).to.be.a("string")
          expect(firstMovie).to.have.property("vote_average");
          expect(firstMovie.vote_average).to.be.a("number")
        });
      })
    });

    it("TC03:returns upcoming movies", () => {
      cy.env(["TMDB_API_KEY"]).then(({TMDB_API_KEY}) => {
        cy.request({
          method: "GET",
          url: "https://api.themoviedb.org/3/movie/upcoming",
          qs: {
            api_key: TMDB_API_KEY,
          }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("results");
          expect(response.body.results).to.be.an("array").and.not.be.empty;
          const firstMovie = response.body.results[0];
          expect(firstMovie).to.have.property("id");
          expect(firstMovie.id).to.be.a("number")
          expect(firstMovie).to.have.property("title");
          expect(firstMovie.title).to.be.a("string")
          expect(firstMovie).to.have.property("overview");
          expect(firstMovie.overview).to.be.a("string")
          expect(firstMovie).to.have.property("poster_path");
          expect(firstMovie.poster_path).to.be.a("string")
          expect(firstMovie).to.have.property("vote_average");
          expect(firstMovie.vote_average).to.be.a("number")
        });
      })
    });
    it("TC04:returns trending movies", () => {
      cy.env(["TMDB_API_KEY"]).then(({TMDB_API_KEY}) => {
        cy.request({
          method: "GET",
          url: "https://api.themoviedb.org/3/trending/movie/day",
          qs: {
            api_key: TMDB_API_KEY,
          }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("results");
          expect(response.body.results).to.be.an("array").and.not.be.empty;
          const firstMovie = response.body.results[0];
          expect(firstMovie).to.have.property("id");
          expect(firstMovie.id).to.be.a("number")
          expect(firstMovie).to.have.property("title");
          expect(firstMovie.title).to.be.a("string")
          expect(firstMovie).to.have.property("overview");
          expect(firstMovie.overview).to.be.a("string")
          expect(firstMovie).to.have.property("poster_path");
          expect(firstMovie.poster_path).to.be.a("string")
          expect(firstMovie).to.have.property("vote_average");
          expect(firstMovie.vote_average).to.be.a("number")
        });
      })
    });
    it("TC05:returns details for a valid movie id - 528001",()=>{
      cy.env(["TMDB_API_KEY"]).then(({TMDB_API_KEY}) => {
        cy.request({
          method: "GET",
          url: "https://api.themoviedb.org/3/movie/528001",
          qs: {
            api_key: TMDB_API_KEY,
          }
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property("id");
          expect(response.body.id).to.be.a("number").eq(528001)
          expect(response.body).to.have.property("title");
          expect(response.body.title).to.be.a("string")
          expect(response.body).to.have.property("overview");
          expect(response.body.overview).to.be.a("string")
          expect(response.body).to.have.property("poster_path");
          expect(response.body.poster_path).to.be.a("string")
          expect(response.body).to.have.property("vote_average");
          expect(response.body.vote_average).to.be.a("number")
        });
      })
    });
    it("TC06:returns error for an invalid movie id",()=>{
      cy.env(["TMDB_API_KEY"]).then(({TMDB_API_KEY}) => {
        cy.request({
          method: "GET",
          url: "https://api.themoviedb.org/3/movie/9999999",
          qs: {
            api_key: TMDB_API_KEY,
          },
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(404);
          expect(response.body).to.have.property("success");
          expect(response.body.success).to.be.false;
          expect(response.body).to.have.property("status_code");
          expect(response.body.status_code).to.be.a("number").eq(34);
          expect(response.body).to.have.property("status_message");
          expect(response.body.status_message).to.be.a("string").eq("The resource you requested could not be found.");
        })
      })
    });

    it("TC07:returns 401 for an invalid api key ",() => {
      cy.request({
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/528001",
        qs: {
          api_key: "invalid-key",
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(401);
        expect(response.body).to.have.property("status_message");
        expect(response.body.status_message).to.be.a("string").eq("Invalid API key: You must be granted a valid key.");
      })
    })
})