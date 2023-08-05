import transferFundsPage from "../page-object-models/transferFundsPage"
import navigation from "../page-object-models/navigation"

describe('Smoke test for bill payment feature', () => {

  beforeEach(() => {
    cy.login()
  })

  it('Given that user enters the page via URL, according content will be displayed', () => {
    cy.visit('https://parabank.parasoft.com/parabank/transfer.htm')
    transferFundsPage.elements.title()
      .should('be.visible')
      .and('contain', 'Transfer Funds')
  })

  it('Given that user enters the page via navigation, according content will be displayed', () => {
    navigation.selectTransferFunds()
    cy.url().should('include', '/transfer.htm')
    transferFundsPage.elements.title()
      .should('be.visible')
      .and('contain', 'Transfer Funds')
  })

  it('Given that user wants to transfer funds within accounts, when form is submitted, success message is displayed', () => {
    navigation.selectTransferFunds()
    transferFundsPage.inputAmount('100')
    transferFundsPage.submit()
    transferFundsPage.elements.transferSuccessfullMessage()
      .should('be.visible')
      .and('contain', 'Transfer Complete!')
      .and('contain', '100')
      .and('contain', 'See Account Activity for more details.')
  })

  it('Given that user wants to submit form with no amount entered, error message will be displayed', () => {
    navigation.selectTransferFunds()
    transferFundsPage.submit()
    transferFundsPage.elements.errorMessage()
      .should('be.visible')
      .and('contain', 'The amount cannot be empty.')
  })

})