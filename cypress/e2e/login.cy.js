import registrationForm from "../page-object-models/registrationForm"
import welcomePage from "../page-object-models/welcomePage"
import landingPage from "../page-object-models/landingPage"
import accountsOverviewPage from "../page-object-models/accountsOverviewPage"
import faker from 'faker'

describe('Smoke test for login', () => {

  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm')
  })

  it('Given that user wants to log in when he has account registered, he can log in with submiting username and password via login form', () => {
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
    cy.url()
      .should('include', '/index')
    landingPage.inputUsername(username)
    landingPage.inputPassword('password')
    landingPage.submitLoginData()
    cy.url()
      .should('include', '/overview')
    accountsOverviewPage.elements.title()
      .should('contain', 'Accounts Overview')
  })
})
