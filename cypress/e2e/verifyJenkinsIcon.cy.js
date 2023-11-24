/// <reference types="cypress"/>

describe('VerifyJenkinsIcon', () => {
    
    it('Verify Jenkins Icon', () => {
        cy.get('#jenkins-head-icon').should('be.visible').and('have.attr', 'src')
        cy.get('#jenkins-head-icon').click()
        cy.url().should('be.eql', 'http://localhost:8080/')

    });
});