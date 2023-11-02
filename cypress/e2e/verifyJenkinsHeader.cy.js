/// <reference types="cypress"/>

describe('verifyHeaderLogoClickable', () => {
    it('TC_02.02.002 | Header > Verify Jenkins Logo (image) and Jenkins Icon (image with text Jenkins) are visible, clickable and after click redirect to Homepage', () => {
       
        cy.get('#jenkins-head-icon').should('be.exist').and('be.visible').click()
        cy.url().should('eq', 'http://localhost:8080/')
        cy.get('#jenkins-name-icon').should('be.exist').and('be.visible').click()
        cy.url().should('eq', 'http://localhost:8080/')
        cy.get('a[id="jenkins-home-link"]').should('be.exist').and('be.visible').click()
        cy.url().should('eq', 'http://localhost:8080/')
       
    });
});