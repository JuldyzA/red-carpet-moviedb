import { defineConfig } from "cypress";
import dotenv from "dotenv";

dotenv.config();
export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    setupNodeEvents(on, config) {
      config.env.TMDB_API_KEY=process.env.VITE_TMDB_API_KEY;
      return config
      // implement node event listeners here
    },
  },
});
