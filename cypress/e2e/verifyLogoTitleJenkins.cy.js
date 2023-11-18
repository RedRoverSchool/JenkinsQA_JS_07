/// <reference types="cypress"/>

import welcomedMessage from '../fixtures/dashboardWelcomedMessage.json';

describe.skip('verifyLogoTitleJenkins', () => {
    it('TC_02.02.012 | Header > Jenkins Logo and Title are visible', function() {
        cy.get('#jenkins-head-icon').should('be.visible').click();
        cy.get('#jenkins-name-icon').should('be.visible').click();

        cy.get('.empty-state-block p').should('be.visible').and('have.text', welcomedMessage.belowTitle); 
    })
})