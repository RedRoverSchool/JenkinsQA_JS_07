/// <reference types="cypress"/>

describe('first Jenkins test', () => {
    it('verify Welcome message', function () {
      cy.get('.empty-state-block h1').should('be.visible').and('have.text', 'Welcome to Jenkins!')
  })
})