export class accountsOverviewPage {

    elements = {
        title: () => cy.get('.title')
    }
}

module.exports = new accountsOverviewPage();
