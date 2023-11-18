/// <reference types="cypress" />

const PORT = Cypress.env("local.port");
const HOST = Cypress.env('local.host');

describe.skip('Verify Logo and title', () => {
it('TC_02.02.010 |Header > Jenkins Logo and Title>Verify logo and title', () => {
    cy.get('#jenkins-name-icon').should('be.visible').and('have.attr', 'alt', 'Jenkins');
    cy.get('a[href="/view/all/newJob"]').click();
    if(cy.get('#jenkins-home-link:link')){
        cy.get('#jenkins-home-link').click();
    }
    cy.url().should('be.eql', `http://${HOST}:${PORT}/`)

});
});