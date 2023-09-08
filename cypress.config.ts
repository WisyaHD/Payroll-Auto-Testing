import { defineConfig } from "cypress";
import { readPdf } from "./cypress/scripts/readPDF";
import { readExcel } from "./cypress/scripts/readExcel";

export default defineConfig({
  e2e: {
    reporter:"mochawesome",
    video: false,
    reporterOptions:{
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: true,
    },
    setupNodeEvents(on, config) {
      on('task', {
        readPdf,
        readExcel,
      });
    },
    baseUrl: "https://qc.nagatech.id/",
    specPattern:['cypress/e2e/specs/**/*.specs.{js,jsx,ts,tsx}', 'cypress/e2e/specs/MenuLaporan/**/*.specs.{js,jsx,ts,tsx}']
  }
});
