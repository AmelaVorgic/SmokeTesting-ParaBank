export class accountsOverviewPage {

    elements = {
        accountsOverviewTitle: () => cy.get('div.ng-scope[ng-app="OverviewAccountsApp"][ng-controller="OverviewAccountsCtrl"]')
    }
}

module.exports = new accountsOverviewPage();
