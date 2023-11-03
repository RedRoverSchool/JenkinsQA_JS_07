/// <reference types="cypress"/>

describe('Dashboard > Verify "New Item" in Command panel.', () => {
    it('Verify "New Item" link redirect to "Enter an item name" page', () => {
        cy.get('a[href="/view/all/newJob"]')
        .should('have.text', 'New Item').click();
        cy.url().should('be.equal', 'http://localhost:8080/view/all/newJob');
        cy.get('.h3').should('be.visible').and('have.text', 'Enter an item name');
    });
    
});