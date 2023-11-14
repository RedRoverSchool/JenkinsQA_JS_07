/// <reference types="cypress"/>

describe('redirectionToRESTAPIPage', () => {
    it('TC_15.01.002 | Footer> Access to REST API > Verify redirection to REST API page', () => {
        cy.get('.rest-api').click()

        cy.get('#page-body h1').should('be.visible').and('have.text', 'REST API')
        cy.get('.jenkins-breadcrumbs__list-item a[href="/api/"]').should('be.visible').and('have.text', 'API')
    });
});