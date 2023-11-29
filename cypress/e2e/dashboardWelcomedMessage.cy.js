/// <reference types="cypress"/>

import welcomedMessage from "../fixtures/dashboardWelcomedMessage.json"

describe.skip('dashboardWelcomedMessage', () => {
    it.skip('TC_02.03.006 | Verify the Welcome Message', () => {
      cy.get('div.empty-state-block > h1').should('be.visible').and('have.text', welcomedMessage.pageTitle)
    });

    it.skip('TC_02.03.014 | Verify the title explaining how to start working in Jenkins', () => {
      cy.get('div[class="empty-state-block"] > p').should('be.visible').and('have.text', welcomedMessage.belowTitle)
    });
});