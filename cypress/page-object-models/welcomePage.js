export class welcomePage {

  elements = {
    title: () => cy.get('.title'),
    welcomeMessage: () => cy.get('#rightPanel > p'),
    logoutButton: () => cy.get('#leftPanel > ul > :nth-child(8) > a')
  }
}

module.exports = new welcomePage();