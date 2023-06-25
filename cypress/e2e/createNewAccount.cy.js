import newAccountPage from "../page-object-models/newAccountPage"

describe('Smoke test for creating new account feature', () => {

    beforeEach(() => {
        cy.login()        
        cy.visit('https://parabank.parasoft.com/parabank/openaccount.htm')
      })

    it('Given that user has chosen checking account option, checking account should be selected', () => {
        newAccountPage.selectChecking()
        newAccountPage.elements.typeOfAccount()
        .should('contain','CHECKING' )
    })

    it('Given that user has user chose savings account option, checking account should be selected', () => {
        newAccountPage.selectSavings()
        newAccountPage.elements.typeOfAccount()
        .should('contain','SAVINGS' )
    })

})