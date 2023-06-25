import landingPage from "../page-object-models/landingPage"

describe('Smoke test for landing page', () => {

    beforeEach(() => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    })

    it('Given that user has opened application, login panel should be displayed', () => {
        landingPage.elements.loginPanel()
            .should('be.visible')
            .and('contain', 'Username')
            .and('contain', 'Password')
            .and('contain', 'Log In')
            .and('contain', 'Forgot login info?')
            .and('contain', 'Register')
    })

    it('Given that user forgot about his login credentials he can access to validation form', () => {
        landingPage.elements.forgotPassword().click()
        cy.url()
            .should('include', '/lookup')
        landingPage.elements.lookupForm()
            .should('be.visible')
    })

    it('Given that user wants to register he can access to registration form', () => {
        landingPage.elements.register().click()
        cy.url()
            .should('include', '/register')
        landingPage.elements.registrationForm()
            .should('be.visible')
    })
})