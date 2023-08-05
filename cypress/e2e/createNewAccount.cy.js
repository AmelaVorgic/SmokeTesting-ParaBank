import newAccountPage from "../page-object-models/newAccountPage"
import navigation from "../page-object-models/navigation"

describe('Smoke test for creating new account feature', () => {

  beforeEach(() => {
    cy.login()
  })

  it('Given that user enters the page via URL, according content will be displayed', () => {
    cy.visit('https://parabank.parasoft.com/parabank/openaccount.htm')
    newAccountPage.elements.title()
      .should('be.visible')
      .and('contain', 'Open New Account')
  })

  it('Given that user enters the page via navigation, according content will be displayed', () => {
    navigation.selectOpenNewAccount()
    cy.url().should('include', '/openaccount.htm')
    newAccountPage.elements.title()
      .should('be.visible')
      .and('contain', 'Open New Account')
  })

  it('Given that user has chosen checking account option, checking account should be selected', () => {
    navigation.selectOpenNewAccount()
    newAccountPage.selectChecking()
    newAccountPage.elements.typeOfAccount()
      .should('contain', 'CHECKING')
  })

  it('Given that user has user chose savings account option, checking account should be selected', () => {
    navigation.selectOpenNewAccount()
    newAccountPage.selectSavings()
    newAccountPage.elements.typeOfAccount()
      .should('contain', 'SAVINGS')
  })

})