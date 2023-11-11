/// <reference types="cypress"/
describe('verifySearchBox', () => {
    it('TC_02.01.004 | Dashboard > Home page>Verify "Search Box"', () => {
        cy.get('#searchform').should('be.visible')
    });
    
});