/// <reference types="cypress"/>

describe('System configuration', () => {

    it('Verify "Tools" page', function () {
     cy.get('a[href="/manage"]').click()
     cy.get('a[href="configureTools"]', {timeout: 3000}).click()
     cy.get('h1').should('have.text', 'Tools')
    })
})
