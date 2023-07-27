import { defineConfig } from "cypress";
import { readPdf } from "./cypress/scripts/readPDF";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        readPdf
      })
    },
    baseUrl: "https://qc.nagatech.id/",
    specPattern:['cypress/e2e/specs/**/*.specs.{js,jsx,ts,tsx}', 'cypress/e2e/specs/MenuLaporan/**/*.specs.{js,jsx,ts,tsx}']
  }
});
