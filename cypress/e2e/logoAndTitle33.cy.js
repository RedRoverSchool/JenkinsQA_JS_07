/// <reference types="cypress"/>

describe.skip('logoAndTitle33', () => {
    
    it('TC_02.02.009 | Header > Jenkins Logo and Title', () => {
        cy.get('#jenkins-home-link').should('be.visible'); 
        cy.get('#jenkins-name-icon').should('have.attr', 'src');   
    });

});