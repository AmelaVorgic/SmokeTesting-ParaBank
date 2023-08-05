# SmokeTesting-ParaBank

Updated version of code for automated tests of ParaBank web app for final paper purposes.

This code has initialized Cypress and following:
- e2e tests for features:
  - landing page
  - registration
  - login
  - logout
  - open new account
  - accounts overview
  - transfer funds
  - bill pay
  - find transactions
  - update contact info
  - request loan
- page object models for:
  - landing page
  - registration
  - navigation
  - open new account
  - accounts overview
  - transfer funds
  - bill pay
  - find transactions
  - update contact info
  - request loan
- custom command for login
...and default files required for Cypress to work

To start tests: 
1. Clone this git repository to your local machine.
2. Open VS Code (or prefered code editor)
3. Import cloned repository
4. Open terminal
5. Run command ``` npx cypress open``` to open Cypress driven browser
 - here you may encounter "No version of Cypress is installed" error and to install Cypress run ``` npx npx cypress install```
 - if installation was successful, repeat step 5.