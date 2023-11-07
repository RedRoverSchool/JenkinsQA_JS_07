/// <reference types="cypress"/>

describe('dashboard', () => {
    const message = 'Welcome to Jenkins!';

    it('TC_02.03.001 | Dashboard > Check welcomed message', () => {
        cy.get('.empty-state-block h1').should('exist').should('have.text', message)
    })

    it('TC_02.08.001 | Dashboard > Set Up an agent navigate to New node page', () => {
        cy.get('a[href="computer/new"]').click()
        cy.url().should('include','computer/new')
        cy.get('h1').should('be.visible').and('have.text','New node')
    })
});