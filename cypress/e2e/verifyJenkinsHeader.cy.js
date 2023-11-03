/// <reference types="cypress"/>

describe('verifyHeaderLogoClickable', () => {
    it('TC_02.02.002 | Header > Verify Jenkins Logo (image) and Jenkins Icon (image with text Jenkins) are visible, clickable and after click redirect to Homepage', () => {
       
        cy.get('#jenkins-head-icon').should('exist').and('be.visible').click()
        cy.url().should('eq', 'http://localhost:8080/')
        cy.get('#jenkins-name-icon').should('exist').and('be.visible').click()
        cy.url().should('eq', 'http://localhost:8080/')
        cy.get('a[id="jenkins-home-link"]').should('exist').and('be.visible').click()
        cy.url().should('eq', 'http://localhost:8080/')
       
    });

    it('TC_02.02.006 | Header > Jenkins Logo is visible and after click redirect to Homepage', () => {
        cy.get('#jenkins-head-icon').should('be.visible').click();
        cy.get('.jenkins-breadcrumbs').should('have.text',"Dashboard").and('have.length',1);
    })
});