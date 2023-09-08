import { defineConfig } from "cypress";
import { readPdf } from "./cypress/scripts/readPDF";
import { readExcel } from "./cypress/scripts/readExcel";
import { baseUrl } from "./cypress/constant";
import * as dotenv from 'dotenv';

dotenv.config();

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
    baseUrl,
    env:{
      username: process.env.USERNAME,
      password: process.env.PASSWORD
    },
    specPattern:['cypress/e2e/specs/**/*.specs.{js,jsx,ts,tsx}', 'cypress/e2e/specs/MenuLaporan/**/*.specs.{js,jsx,ts,tsx}']
  },
  env:{
    username: process.env.USERNAME,
    password: process.env.PASSWORD
  },
});
