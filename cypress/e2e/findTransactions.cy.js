import findTransactionsPage from "../page-object-models/findTransactionsPage"
import navigation from "../page-object-models/navigation"

describe('Smoke test for find transactions feature', () => {

  beforeEach(() => {
    cy.login()
  })

  it('Given that user enters the page via URL, according content will be displayed', () => {
    cy.visit('https://parabank.parasoft.com/parabank/findtrans.htm')
    findTransactionsPage.elements.title()
      .should('be.visible')
      .and('contain', 'Find Transactions')
  })

  it('Given that user enters the page via navigation, according content will be displayed', () => {
    navigation.selectFindTransactions()
    cy.url().should('include', '/findtrans.htm')
    findTransactionsPage.elements.title()
      .should('be.visible')
      .and('contain', 'Find Transactions')
  })

  it('Given that user has input ID of transaction, table containing transactions with that ID or empty table will display', () => {
    navigation.selectFindTransactions()
    findTransactionsPage.inputId('12345')
    findTransactionsPage.submitId()
    findTransactionsPage.elements.resultsTitle()
      .should('be.visible')
      .and('contain', 'Transaction Results')
    findTransactionsPage.elements.resultsTable()
      .should('be.visible')
  })

  it('Given that user has input date of transaction, table with transactions within that date or empty table will display', () => {
    navigation.selectFindTransactions()
    findTransactionsPage.inputDate('10-10-2023')
    findTransactionsPage.submitDate()
    findTransactionsPage.elements.resultsTitle()
      .should('be.visible')
      .and('contain', 'Transaction Results')
    findTransactionsPage.elements.resultsTable()
      .should('be.visible')
  })

  it('Given that user has input range of dates, table with transactions in that date range or empty table will display', () => {
    navigation.selectFindTransactions()
    findTransactionsPage.inputStartDate('10-10-2023')
    findTransactionsPage.inputEndDate('11-11-2023')
    findTransactionsPage.submitRange()
    findTransactionsPage.elements.resultsTitle()
      .should('be.visible')
      .and('contain', 'Transaction Results')
    findTransactionsPage.elements.resultsTable()
      .should('be.visible')
  })

  it('Given that user has input amount of transaction, table with transactions of that amount or empty table will display', () => {
    navigation.selectFindTransactions()
    findTransactionsPage.inputAmount('100')
    findTransactionsPage.submitAmount()
    findTransactionsPage.elements.resultsTitle()
      .should('be.visible')
      .and('contain', 'Transaction Results')
    findTransactionsPage.elements.resultsTable()
      .should('be.visible')
  })
})
