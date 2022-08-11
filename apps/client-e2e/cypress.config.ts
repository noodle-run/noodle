/* eslint-disable import/no-extraneous-dependencies */
import { nxE2EPreset } from '@nrwl/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';

const cypressJsonConfig = {
  fileServerFolder: '.',
  fixturesFolder: './src/fixtures',
  video: true,
  videosFolder: '../../dist/cypress/apps/client-e2e/videos',
  screenshotsFolder: '../../dist/cypress/apps/client-e2e/screenshots',
  chromeWebSecurity: false,
  specPattern: 'src/e2e/**/*.cy.{js,jsx,ts,tsx}',
  supportFile: 'src/support/e2e.ts',
};
export default defineConfig({
  e2e: {
    ...nxE2EPreset(__dirname),
    ...cypressJsonConfig,
  },
});

/* eslint-enable import/no-extraneous-dependencies */
