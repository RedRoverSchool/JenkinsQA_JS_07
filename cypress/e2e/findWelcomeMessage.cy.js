/// <reference types="cypress"/>

describe('findWelcomeMessage', () => {

    it('TC_02.03.009 |Dashboard > Welcomed message', function () {
      cy.get('.empty-state-block h1').should('be.visible').and('have.text', 'Welcome to Jenkins!');
    })
  
})