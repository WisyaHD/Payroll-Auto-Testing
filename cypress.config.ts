import { defineConfig } from "cypress";
import { readPdf } from "./cypress/scripts/readPDF";
import { readExcel } from "./cypress/scripts/readExcel";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        readPdf,
        readExcel,
      })
    },
    baseUrl: "https://qc.nagatech.id/",
    specPattern:['cypress/e2e/specs/**/*.specs.{js,jsx,ts,tsx}', 'cypress/e2e/specs/MenuLaporan/**/*.specs.{js,jsx,ts,tsx}']
  }
});
