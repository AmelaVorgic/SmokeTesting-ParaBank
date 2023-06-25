export class landingPage {

  elements = {
    logo: () => cy.get('.logo'),
    caption: () => cy.get('.caption'),
    loginPanel: () => cy.get('#loginPanel'),
    loginForm: () => cy.get('form'),
    usernameInputField: () => cy.get('input[name="username"]'),
    passwordInputField: () => cy.get('input[name="password"]'),
   // loginButton: () => cy.get('input[value="Log In"]'),
    loginButton: () => cy.get('input[type="submit"]'),
    error: () => cy.get('.error'),
    forgotPassword: () => cy.contains('Forgot login info?'),
    lookupForm: () => cy.get('#lookupForm'),
    register: () => cy.contains('Register'),
    registrationForm: () => cy.get('#customerForm'),
  }

  submitLoginData() {
    this.elements.loginButton().click()
  }

  inputUsername(username) {
    this.elements.usernameInputField().click()
    this.elements.usernameInputField().type(username)
  }

  inputPassword(password) {
    this.elements.passwordInputField().click()
    this.elements.passwordInputField().type(password)
  }

}

module.exports = new landingPage();