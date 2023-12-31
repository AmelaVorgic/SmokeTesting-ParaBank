export class reqLoanPage {

    elements = {
      title: () => cy.get('.title'),
      loanAmount: () => cy.get('#amount'),
      downPayment: () => cy.get('#downPayment'),
      applyButton: () => cy.get('input[type="submit"]'),
      successDisplay: () => cy.get('[ng-if="showResult"]')
    }
  
    submit() {
      this.elements.applyButton().click()
    }
  
    inputLoanAmount(amount) {
      this.elements.loanAmount().click()
      this.elements.loanAmount().type(amount)
    }
  
    inputDownPayment(amount) {
      this.elements.downPayment().click()
      this.elements.downPayment().type(amount)
    }
  
  }
  module.exports = new reqLoanPage();