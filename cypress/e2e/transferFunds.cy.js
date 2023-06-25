import transferFundsPage from "../page-object-models/transferFundsPage"

describe('Smoke test for bill payment feature', () => {

  beforeEach(() => {
    cy.login()    
    cy.visit('https://parabank.parasoft.com/parabank/transfer.htm')
  })

it('Given that user wants to transfer funds within accounts, when form is submitted, success message is displayed', () => {
    transferFundsPage.inputAmount('100')
    cy.get('input').each(($input) => {
      cy.wrap($input).trigger('keydown', { keyCode: 13, which: 13 });
    });
        transferFundsPage.elements.title().click()
   transferFundsPage.transfer()
    transferFundsPage.elements.transferSuccessfullMessage()
    .should('be.visible')
    .and('contain', 'Transfer Complete!')
    .and('contain', '100')
    .and('contain', 'See Account Activity for more details.')
  })

 })