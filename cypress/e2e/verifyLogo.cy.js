/// <reference types="cypress" />

const PORT = Cypress.env("local.port");
const HOST = Cypress.env('local.host');

describe.skip('Verify Logo', () => {
it.skip('TC_02.02.011 | Header > Jenkins Logo and Title > Verify logo is image and clickable', () => {
    cy.get('#jenkins-head-icon').should('have.prop','tagName','IMG');
    cy.get('a[href="/view/all/newJob"]').click();
  
        cy.get('#jenkins-head-icon').should('exist').and('not.be.disabled').click();
    cy.url().should('be.eql', `http://${HOST}:${PORT}/`)

});
});