const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 1080,
  defaultCommandTimeout: 2000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://parabank.parasoft.com/parabank/index.htm',
  },
});
