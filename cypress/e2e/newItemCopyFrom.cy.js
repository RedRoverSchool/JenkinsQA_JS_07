/// <reference types="cypress"/>

import data from '../fixtures/newItem.json'

describe('New item > Copy from', () => {
    beforeEach(() => {
        cy.get('a[href="/view/all/newJob"]').click();
        cy.get('input#name').type(data.firstProjectName);
        cy.get('.hudson_model_FreeStyleProject').click();
        cy.get('#ok-button').click();
        cy.get('#jenkins-head-icon').click();
    });

    it('TC_03.08.001 | New item > Copy from > Open "New job" page', () => {
        cy.get('a[href="/view/all/newJob"]').click();
        cy.url().should('be.equal', data.newItemPage)
    });

    it('TC_03.08.002 | New Item > Copy from > "Copy from" field exist', () => {
        cy.get('a[href="/view/all/newJob"]').click();
        cy.get('div.item-copy').should('be.exist').and('be.visible');
    });

    it('TC_03.08.003 | New Item > Copy from > Error message', () => {
        cy.get('a[href="/view/all/newJob"]').click();
        cy.get('#from').type(data.firstProjectName);
        cy.get('#itemname-required').should('be.visible').and('have.text', data.errorMessage);
    });

    it('TC_03.08.004 | New Item > Copy from > Verify a drop-down with existing jobs names', () => {
        cy.get('a[href="/view/all/newJob"]').click();
        cy.get('input#name').type(data.secondProjectName);
        cy.get('#from').type(data.firstProjectName[0]);
        cy.get('.item-copy .yui-ac-content').should('be.visible').and('contain.text', data.firstProjectName);
    });

    it('TC_03.08.005 | +New Item > Copy from > Redirect to configure page', () => {
        cy.get('a[href="/view/all/newJob"]').click();
        cy.get('input#name').type(data.secondProjectName);
        cy.get('.hudson_model_FreeStyleProject').click();
        cy.get('#from').type(data.firstProjectName);
        cy.get('#ok-button').click();
        cy.url().should('include', `job/${data.secondProjectName}/configure`);
        cy.get('#side-panel .jenkins-app-bar__content').should('have.text', data.pageName);
    });

    it('TC_03.08.006 | +New Item > Copy from > Error message when copy from non-existent job', () => {
        cy.get('a[href="/view/all/newJob"]').click();
        cy.get('input#name').type(data.secondProjectName);
        cy.get('.hudson_model_FreeStyleProject').click();
        cy.get('#from').type(data.nonExistenProjectName);
        cy.get('#ok-button').click();
        cy.get('#main-panel > h1').should('have.text', 'Error');
        cy.get('#main-panel > p').should('have.text', `No such job: ${data.nonExistenProjectName}`);
    });
});