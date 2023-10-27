/// <reference types="cypress"/>

describe('Dashboard > Command panel on the left side', () => {
    it('Verify "New Item" link goes to correct page', () => {
        cy.get('a[href="/view/all/newJob"]').should('have.text', 'New Item').click();
        cy.url().should('be.equal', 'http://localhost:8080/view/all/newJob');
    });
});