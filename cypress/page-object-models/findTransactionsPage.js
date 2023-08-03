export class findTransactionsPage {

    elements = {
      account: () => cy.get('#accountId'),
      transactionId: () => cy.get('[ng-model="criteria.transactionId"]'),
      date: () => cy.get('[ng-model="criteria.onDate"]'),
      startDate: () => cy.get('[ng-model="criteria.fromDate"]'),
      endDate: () => cy.get('[ng-model="criteria.toDate"]'),
      amount: () => cy.get('[ng-model="criteria.amount"]'),
      resultsTitle: () => cy.get('.title'),
      resultsTable: () => cy.get('#transactionTable'),
      idButton: () => cy.get('button[type="submit"].button[ng-click="criteria.searchType = \'ID\'"]'),
      dateButton: () => cy.get('button[type="submit"].button[ng-click="criteria.searchType = \'DATE\'"]'),
      rangeButton: () => cy.get('button[type="submit"].button[ng-click="criteria.searchType = \'DATE_RANGE\'"]'),
      amountButton: () => cy.get('button[type="submit"].button[ng-click="criteria.searchType = \'AMOUNT\'"]'),
    }
  
    submitId() {
      this.elements.idButton().click()
    }

    submitDate() {
        this.elements.dateButton().click()
      }

      submitRange() {
        this.elements.rangeButton().click()
      }

      submitAmount() {
        this.elements.amountButton().click()
      }
  
    inputId(id) {
      this.elements.transactionId().click()
      this.elements.transactionId().type(id)
    }
  
    inputDate(date) {
        this.elements.date().click()
        this.elements.date().type(date)
      }

      inputStartDate(start) {
        this.elements.startDate().click()
        this.elements.startDate().type(start)
      }

      inputEndDate(end) {
        this.elements.endDate().click()
        this.elements.endDate().type(end)
      }

      inputAmount(amount) {
        this.elements.amount().click()
        this.elements.amount().type(amount)
      }
  
  }
  
  module.exports = new findTransactionsPage();