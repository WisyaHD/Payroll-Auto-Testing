import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://qc.nagatech.id/",
    specPattern:['cypress/e2e/specs/**/*.specs.{js,jsx,ts,tsx}']
  }
});
