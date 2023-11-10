/// <reference types="cypress"/>

import welcomedMessage from "../fixtures/dashboardWelcomedMessage.json"

describe('Dashboard > Welcomed message', () => {
    
    it('TC_02.03.003 | Dashboard > Check Welcomed message', () => {
        cy.get('div.empty-state-block>h1')
        .should('be.visible')
        .and('have.text', welcomedMessage.pageTitle)

        cy.get('div.empty-state-block p').should('have.text', welcomedMessage.belowTitle)
    })
})
