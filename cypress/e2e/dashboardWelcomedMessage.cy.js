/// <reference types="cypress"/>

describe('dashboardWelcomedMessage', () => {
    it('TC_02.03.006 | Verify the Welcome Message', () => {
      cy.get('div.empty-state-block > h1').should('have.text', 'Welcome to Jenkins!')
    });
});