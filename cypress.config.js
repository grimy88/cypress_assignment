const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalRunAllSpecs: true,
    specPattern: [
      '**/SignUpTest.cy.js',
      '**/SignInTest.cy.js',
      '**/MyAccountTest.cy.js',
      '**/BankAccountTest.cy.js',
      '**/TransactionLostTest.cy.js',
      '**/TransactionsTest.cy.js',
      '**/ApiTest.cy.js'
    ]
  },
});