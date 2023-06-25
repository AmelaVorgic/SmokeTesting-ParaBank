export class registrationForm {

    elements = {
        registrationForm: () => cy.get('#customerForm'),
        firstNameInputField: () => cy.get('input[name="customer.firstName"]'),
        lastNameInputField: () => cy.get('input[name="customer.lastName"]'),
        addressInputField: () => cy.get('input[name="customer.address.street"]'),
        cityInputField: () => cy.get('input[name="customer.address.city"]'),
        stateInputField: () => cy.get('input[name="customer.address.state"]'),
        zipCodeInputField: () => cy.get('input[name="customer.address.zipCode"]'),
        phoneNoInputField: () => cy.get('input[name="customer.phoneNumber"]'),
        ssnInputField: () => cy.get('input[name="customer.ssn"]'),
        usernameInputField: () => cy.get('input[name="customer.username"]'),
        passwordInputField: () => cy.get('input[name="customer.password"]'),
        passwordConfirmationInputField: () => cy.get('input[name="repeatedPassword"]'),
        registerButton: () => cy.get('input[value="Register"]'),
        firstNameEmptyFieldError: () => cy.get('span.error[id="customer.firstName.errors"]'),
        lastNameEmptyFieldError: () => cy.get('span.error[id="customer.lastName.errors"]'),
        addressEmptyFieldError: () => cy.get('span.error[id="customer.address.street.errors"]'),
        cityEmptyFieldError: () => cy.get('span.error[id="customer.address.city.errors"]'),
        stateEmptyFieldError: () => cy.get('span.error[id="customer.address.state.errors"]'),
        zipCodeEmptyFieldError: () => cy.get('span.error[id="customer.address.zipCode.errors"]'),
        ssnEmptyFieldError: () => cy.get('span.error[id="customer.ssn.errors"]'),
        usernameFieldError: () => cy.get('span.error[id="customer.username.errors"]'),
        passwordEmptyFieldError: () => cy.get('span.error[id="customer.password.errors"]'),
        passwordConfirmationError: () => cy.get('span.error[id="repeatedPassword.errors"]')
    }

    submitRegistrationData() {
        this.elements.registerButton().click()
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

    inputSsn(ssn) {
        this.elements.ssnInputField().click()
        this.elements.ssnInputField().type(ssn)
    }

    inputUsername(username) {
        this.elements.usernameInputField().click()
        this.elements.usernameInputField().type(username)
    }

    inputPassword(password) {
        this.elements.passwordInputField().click()
        this.elements.passwordInputField().type(password)
    }

    confirmPassword(password) {
        this.elements.passwordConfirmationInputField().click()
        this.elements.passwordConfirmationInputField().type(password)
    }

}

module.exports = new registrationForm();