/// <reference types="cypress"/>

import data from '../fixtures/newItem.json'

describe('New item > Copy from', () => {
    beforeEach(() => {
        cy.get('a[href="/view/all/newJob"]').click();
        cy.get('input#name').type(data.firstProjectName);
        cy.get('.hudson_model_FreeStyleProject').click();
        cy.get('#ok-button').click();
        cy.visit(data.homePage);
    });

    it('TC_03.08.001 | New item > Copy from > Open "New job" page', () => {
        cy.get('a[href="/view/all/newJob"]').click();
        cy.url().should('be.equal', data.newItemPage)
    });
});


