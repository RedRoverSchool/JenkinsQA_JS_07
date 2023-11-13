/// <reference types="cypress"/>

describe('redirectionToRESTAPIPage', () => {
    it('TC_15.01.002 | Footer> Access to REST API > Verify redirection to REST API page', () => {
        cy.get('.rest-api').click()
    });
});