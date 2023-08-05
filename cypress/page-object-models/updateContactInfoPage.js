export class updateContactInfoPage {

    elements = {
        title: () => cy.get('.title'),
        firstNameInputField: () => cy.get('input[name="customer.firstName"]'),
        lastNameInputField: () => cy.get('input[name="customer.lastName"]'),
        addressInputField: () => cy.get('input[name="customer.address.street"]'),
        cityInputField: () => cy.get('input[name="customer.address.city"]'),
        stateInputField: () => cy.get('input[name="customer.address.state"]'),
        zipCodeInputField: () => cy.get('input[name="customer.address.zipCode"]'),
        phoneNoInputField: () => cy.get('input[name="customer.phoneNumber"]'),
        successMessage: () => cy.get('[ng-app="UpdateProfileApp"] > .ng-scope'),
        updateButton: () => cy.get('input[value="Update Profile"]'),
        firstNameEmptyFieldError: () => cy.get('span.error.ng-scope[ng-if="customer && !customer.firstName"]'),
        lastNameEmptyFieldError: () => cy.get('span.error.ng-scope[ng-if="customer && !customer.lastName"]'),
        addressEmptyFieldError: () => cy.get('span.error.ng-scope[ng-if="customer && !customer.address.street"]'),
        cityEmptyFieldError: () => cy.get('span.error.ng-scope[ng-if="customer && !customer.address.city"]'),
        stateEmptyFieldError: () => cy.get('span.error.ng-scope[ng-if="customer && !customer.address.state"]'),
        zipCodeEmptyFieldError: () => cy.get('span.error.ng-scope[ng-if="customer && !customer.address.zipCode"]')

    }

    submitUpdateData() {
        this.elements.updateButton().click()
    }

    inputFirstName(firstName) {
        this.elements.firstNameInputField().click()
        this.elements.firstNameInputField().type(firstName)
    }

    inputLastName(lastName) {
        this.elements.lastNameInputField().click()
        this.elements.lastNameInputField().type(lastName)
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

}

module.exports = new updateContactInfoPage();