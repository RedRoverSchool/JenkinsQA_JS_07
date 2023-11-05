/// <reference types="cypress"/>

import welcomedMessage from "../fixtures/dashboardWelcomedMessage.json"

describe('dashboardWelcomedMessage', () => {
    it('TC_02.03.006 | Verify the Welcome Message', () => {
      cy.get('div.empty-state-block > h1').should('be.visible').and('have.text', welcomedMessage.pageTitle)
    });
});