/// <reference types="cypress"/>

describe('verify welcomed message exist', () => {
    const message = 'Welcome to Jenkins!';

    it('welcomed message exist', () => {
        cy.get('.empty-state-block h1').should('exist').should('have.text', message)
    })
});