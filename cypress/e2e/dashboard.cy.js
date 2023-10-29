/// <reference types="cypress"/>

describe('dashboard', () => {
    const message = 'Welcome to Jenkins!';

    it('TC_02.03.001 | Dashboard > Check welcomed message', () => {
        cy.get('.empty-state-block h1').should('exist').should('have.text', message)
    })
});