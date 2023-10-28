/// <reference types="cypress"/>

describe('Tools page', () => {

    it('TC_09.06.001 | US_09.06 | Go to "Tools" page', function() {
        cy.get('a[href="/manage"]').click()
        cy.get('a[href="configureTools"]', { timeout: 5000 }).click()
        cy.get('h1').should('have.text', 'Tools')
    })
})