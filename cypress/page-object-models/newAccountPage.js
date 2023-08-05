export class newAccountPage {

  elements = {
    title: () => cy.get('.title'),
    typeOfAccount: () => cy.get('#type'),
    checkingAccount: () => cy.get('select#type').select('0'),
    savingsAccount: () => cy.get('select#type').select('1'),
    account: () => cy.get('#fromAccountId').select('13566'),
    openNewAccountButton: () => cy.get('input[type="submit"]'),
    accountSuccessfullyAddedMessage: () => cy.get('[ng-app="AddAccountApp"] > .ng-scope')
  }

  openNewAccount() {
    this.elements.openNewAccountButton().click()
  }

  selectChecking() {
    this.elements.checkingAccount()
  }

  selectSavings() {
    this.elements.savingsAccount()
  }

  selectAccount() {
    this.elements.account()
  }

}
module.exports = new newAccountPage();