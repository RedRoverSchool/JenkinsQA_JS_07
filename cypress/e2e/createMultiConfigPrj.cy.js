/// <reference types="cypress"/>

describe('createMultiConfigProject', () => {
    it('TC_03.06.013 | Create Multiconfiguration project', function() {
        cy.get('a[href="newJob"]').click();
        cy.get('input#name').type('ProjectOne');
        cy.get('li[tabindex="0"] span').contains('Multi-configuration project').click();
        cy.get('#ok-button').click();
        cy.get('.jenkins-breadcrumbs__list-item:nth-child(1) > .model-link').click();

        cy.get('td a[href*="job"].jenkins-table__link').should('have.text', 'ProjectOne');
    });    
});