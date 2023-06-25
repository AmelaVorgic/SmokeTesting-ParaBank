export class accountsOverviewPage {

    elements = {
        billPaymentTitle: () => cy.get('div.ng-scope[ng-app="OverviewAccountsApp"][ng-controller="OverviewAccountsCtrl"]'),
        payeeNameInputField: () => cy.get('input[name="payee.name"]'),
        addressInputField: () => cy.get('input[name="payee.address.street"]'),
        cityInputField: () => cy.get('input[name="payee.address.city"]'),
        stateInputField: () => cy.get('input[name="payee.address.state"]'),
        zipCodeInputField: () => cy.get('input[name="payee.address.zipCode"]'),
        phoneNoInputField: () => cy.get('input[name="payee.phoneNumber"]'),
        accountNoInputField: () => cy.get('input[name="payee.accountNumber"]'),
        accountVerificationInputfield: () => cy.get('input[name="verifyAccount"]'),
        amountInputField: () => cy.get('input[name="amount"]'),
        sendButton: () => cy.get('input[value="Send Payment"]'),
        paymentSuccess: () => cy.get('[ng-show="showResult"]')
    }

    submitBillPayment() {
        this.elements.sendButton().click()
      }

    inputPayeeName(payeename) {
        this.elements.payeeNameInputField().click()
        this.elements.payeeNameInputField().type(payeename)
      }

      inputAddress(address) {
        this.elements.addressInputField().click()
        this.elements.addressInputField().type(address)
    }

    inputCity(city) {
        this.elements.cityInputField().click()
        this.elements.cityInputField().type(city)
    }

    inputState(state) {
        this.elements.stateInputField().click()
        this.elements.stateInputField().type(state)
    }

    inputZipCode(zipCode) {
        this.elements.zipCodeInputField().click()
        this.elements.zipCodeInputField().type(zipCode)
    }

    inputPhoneNo(phoneNumber) {
        this.elements.phoneNoInputField().click()
        this.elements.phoneNoInputField().type(phoneNumber)
    }

    inputAccountNo(accountNumber) {
        this.elements.accountNoInputField().click()
        this.elements.accountNoInputField().type(accountNumber)
    }

    verifyAccount(accountVerification) {
        this.elements.accountVerificationInputfield().click()
        this.elements.accountVerificationInputfield().type(accountVerification)
    }

    inputAmount(amount) {
        this.elements.amountInputField().click()
        this.elements.amountInputField().type(amount)
    }
}

module.exports = new accountsOverviewPage();
