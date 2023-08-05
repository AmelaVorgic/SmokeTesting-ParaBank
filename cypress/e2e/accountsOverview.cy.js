import accountsOverviewPage from "../page-object-models/accountsOverviewPage"
import navigation from "../page-object-models/navigation"

describe('Smoke test for accounts overview feature', () => {

  beforeEach(() => {
    cy.login()
  })

  it('Given that user enters the page via URL, according content will be displayed', () => {
    cy.visit('https://parabank.parasoft.com/parabank/overview.htm')
    accountsOverviewPage.elements.title()
      .should('be.visible')
      .and('contain', 'Accounts Overview')
  })

  it('Given that user enters the page via navigation, according content will be displayed', () => {
    navigation.selectAccountsOverview()
    cy.url().should('include', '/overview.htm')
    accountsOverviewPage.elements.title()
      .should('be.visible')
      .and('contain', 'Accounts Overview')
  })

})