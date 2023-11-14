/// <reference types="cypress"/>

describe('logoAndTitle33', () => {
    
    it('TC_02.02.009 | Header > Jenkins Logo and Title', () => {
        cy.get('#jenkins-home-link').should('be.visible').click(); 
        cy.get('#jenkins-name-icon').should('have.attr', 'src');   
        cy.get('a[href="/view/all/newJob"]').click();
    });

});