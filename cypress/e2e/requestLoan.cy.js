import requestLoanPage from "../page-object-models/requestLoanPage"
import navigation from "../page-object-models/navigation"

describe('Smoke test for loan request feature', () => {

  beforeEach(() => {
    cy.login()
  })

  it('Given that user enters the page via URL, according content will be displayed', () => {
    cy.visit('https://parabank.parasoft.com/parabank/requestloan.htm')
    requestLoanPage.elements.title()
      .should('be.visible')
      .and('contain', 'Apply for a Loan')
  })

  it('Given that user enters the page via navigation, according content will be displayed', () => {
    navigation.selectRequestLoan()
    cy.url().should('include', '/requestloan.htm')
    requestLoanPage.elements.title()
      .should('be.visible')
      .and('contain', 'Apply for a Loan')
  })

  it('Given that user wants to request a loan, upon submitting valid form, success message will be displayed', () => {
    navigation.selectRequestLoan()
    requestLoanPage.inputLoanAmount('1000')
    requestLoanPage.inputDownPayment('100')
    requestLoanPage.elements.successDisplay()
      .should('be.visible')
      .and('contain', 'Loan Request Processed')
      .and('contain', 'Congratulations, your loan has been approved.')
  })

})