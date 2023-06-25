export class navigation {

    elements = {
        openNewAccount: () => cy.get('#leftPanel > ul > :nth-child(1) > a').should('contain', 'Open New Account'),
        accountsOverview: () => cy.get('#leftPanel > ul > :nth-child(2) > a').should('contain', 'Accounts Overview'),
        transferFunds: () => cy.get('#leftPanel > ul > :nth-child(3) > a').should('contain', 'Transfer Funds'),
        billPay: () => cy.get('#leftPanel > ul > :nth-child(4) > a').should('contain', 'Bill Pay'),
        findTransactions: () => cy.get('#leftPanel > ul > :nth-child(5) > a').should('contain', 'Find Transactions'),
        updateContactInfo: () => cy.get('#leftPanel > ul > :nth-child(6) > a').should('contain', 'Update Contact Info'),
        requestLoan: () => cy.get('#leftPanel > ul > :nth-child(7) > a').should('contain', 'Request Loan'),
        logOut: () => cy.get('#leftPanel > ul > :nth-child(8) > a').should('contain', 'Log Out')
    }

    selectOpenNewAccount() {
        this.elements.openNewAccount().click()
    }
    selectAccountsOverview() {
        this.elements.accountsOverview().click()
    }
    selectTransferFunds() {
        this.elements.transferFunds().click()
    }
    selectBillPay() {
        this.elements.billPay().click()
    }
    selectFindTransactions() {
        this.elements.findTransactions().click()
    }
    selectUpdateContactInfo() {
        this.elements.updateContactInfo().click()
    }
    selectRequestLoan() {
        this.elements.requestLoan().click()
    }
    selectLogOut() {
        this.elements.logOut().click()
    }

}

module.exports = new navigation();