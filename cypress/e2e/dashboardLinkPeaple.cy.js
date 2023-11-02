/// <reference types="cypress"/>

describe('dashboardLinkPeople', () => {
    it(' Dashboard> Check "People" link', () => {
        cy.get('a[href="/asynchPeople/"]').should('have.text', 'People').click();
        cy.url().should('be.equal', 'http://localhost:8080/asynchPeople/');
    });
});
