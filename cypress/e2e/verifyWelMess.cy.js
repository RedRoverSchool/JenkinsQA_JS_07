/// <reference types="cypress"/>

describe('verify Welcome message', () => {

    it('TC_02.03.013 | Verify Welcomed message', function () {
      cy.get('.empty-state-block h1').should('be.visible').and('have.text', 'Welcome to Jenkins!')
    })
})
