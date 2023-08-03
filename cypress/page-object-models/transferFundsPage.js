export class transferFundsPage {

    elements = {
      title: () => cy.get('.title'),
      amountInputField: () => cy.get('#amount'),
      transferButton: () => cy.get('input[value="Transfer"]'),
      transferSuccessfullMessage: () => cy.get('div.ng-scope[ng-if="showResult"]')
    }
  
    transfer() {
      this.elements.transferButton().click()
    }
  
    inputAmount(amount) {
      this.elements.amountInputField().click()
      this.elements.amountInputField().type(amount)
    }

   }
  module.exports = new transferFundsPage();