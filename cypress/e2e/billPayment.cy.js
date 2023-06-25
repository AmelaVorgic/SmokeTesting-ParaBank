import billPayPage from "../page-object-models/billPayPage"

describe('Smoke test for bill payment feature', () => {

  beforeEach(() => {
    cy.login()    
    cy.visit('https://parabank.parasoft.com/parabank/billpay.htm')
  })

it('Given that user wants to send funds to another account, when form is submitted, success message with name of payee and payed amount is displayed', () => {
    billPayPage.inputPayeeName('Payee Name')
    billPayPage.inputAddress('Address')
    billPayPage.inputCity('City')
    billPayPage.inputState('State')
    billPayPage.inputZipCode('00000')
    billPayPage.inputPhoneNo('09112345678')
    billPayPage.inputAccountNo('11111111')
    billPayPage.verifyAccount('11111111')
    billPayPage.inputAmount('100')
    billPayPage.submitBillPayment()
    billPayPage.elements.paymentSuccess()
    .should('be.visible')
    .and('contain', 'Bill Payment Complete')
    .and('contain', 'Payee Name')
    .and('contain', '100')
  })

 })