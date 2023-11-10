/// <reference types="cypress"/>
import dbCommandPanel from "../fixtures/dbCommandPanel.json";

describe('dbCommandPanel', function () {
    beforeEach(function () {
        cy.get('#side-panel #tasks a').as('sideMenuLink');
    });

    dbCommandPanel.sidePanel.forEach((link, ind) => { 
        it(`Verify side panel menu links ${link} functionality`, function () {
            cy.wrap(this.sideMenuLink[ind]).click();

            cy.url().should('contain', dbCommandPanel.link[ind]);
            cy.contains(dbCommandPanel.pageHeader[ind]);
        });
    });
});