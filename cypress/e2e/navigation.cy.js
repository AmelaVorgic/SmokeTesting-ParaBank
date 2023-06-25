import navigation from "../page-object-models/navigation"

describe('Smoke test for navigation within the application', () => {

    beforeEach(() => {
        cy.login()
    })

    it('Given that user wants to open new account, he can navigate to the form via left side navigation', () => {
        navigation.selectOpenNewAccount()
        cy.url()
            .should('include', '/openaccount.htm')
    })

    it('Given that user wants to overview his accounts, he can navigate to them via left side navigation', () => {
        navigation.selectAccountsOverview()
        cy.url()
            .should('include', '/overview.htm')
    })

    it('Given that user wants to transfer funds, he can navigate to the form via left side navigation', () => {
        navigation.selectTransferFunds()
        cy.url()
            .should('include', '/transfer.htm')
    })

    it('Given that user wants to bill payment, he can navigate to the form via left side navigation', () => {
        navigation.selectBillPay()
        cy.url()
            .should('include', '/billpay.htm')
    })

    it('Given that user wants to find transactions, he can navigate to them via left side navigation', () => {
        navigation.selectFindTransactions()
        cy.url()
            .should('include', '/findtrans.htm')
    })

    it('Given that user wants to update his contact information, he can navigate to them via left side navigation', () => {
        navigation.selectUpdateContactInfo()
        cy.url()
            .should('include', '/updateprofile.htm')
    })

    it('Given that user wants to request a loan, he can navigate to the form via left side navigation', () => {
        navigation.selectRequestLoan()
        cy.url()
            .should('include', '/requestloan.htm')
    })

    it('Given that user wants to log out, he can log out via left side navigation', () => {
        navigation.selectLogOut()
        cy.url()
            .should('include', '/index.htm')
    })

})