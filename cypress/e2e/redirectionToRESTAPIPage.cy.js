/// <reference types="cypress"/>

import api from '../fixtures/redirectionToRESTAPI.json'

describe.skip('redirectionToRESTAPIPage', () => {
    it('TC_15.01.002 | Footer> Access to REST API > Verify redirection to REST API page', () => {
        cy.get('.rest-api').click()

        cy.url().should('include', api.url)
        cy.get('#page-body h1').should('be.visible').and('have.text', api.REST_API)
        cy.get('.jenkins-breadcrumbs__list-item a[href="/api/"]').should('be.visible').and('have.text', api.API)
    });
});