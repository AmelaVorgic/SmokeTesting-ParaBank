import registrationForm from "../page-object-models/registrationForm"
import welcomePage from "../page-object-models/welcomePage"
import landingPage from "../page-object-models/landingPage"
import faker from 'faker'

Cypress.Commands.add('login', () => {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm')
    const username = faker.internet.userName()
    registrationForm.inputFirstName('Name')
    registrationForm.inputLastName('Lastname')
    registrationForm.inputAddress('Address')
    registrationForm.inputCity('City')
    registrationForm.inputState('State')
    registrationForm.inputZipCode('00000')
    registrationForm.inputPhoneNo('09112345678')
    registrationForm.inputSsn('012343210')
    registrationForm.inputUsername(username)
    registrationForm.inputPassword('password')
    registrationForm.confirmPassword('password')
    registrationForm.submitRegistrationData()
    welcomePage.elements.logoutButton().click()
    landingPage.inputUsername(username)
    landingPage.inputPassword('password')
    landingPage.submitLoginData()
})