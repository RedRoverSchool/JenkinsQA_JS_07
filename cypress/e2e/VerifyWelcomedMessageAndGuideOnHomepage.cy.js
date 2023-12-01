/// <reference types = "cypress"/>

import welcomeMessage from "../fixtures/welcomeAndGuideMessage.json"
import quideMessage from "../fixtures/welcomeAndGuideMessage.json"

describe ( 'Verify welcomed message', () => {
    it('TC_02.03.015 |Verify welcomed message and quick guide on homepage', function() {
        cy.get('h1').should('be.visible')
        cy.get('h1').should('have.text', welcomeMessage.greeting)
        cy.get('p').should('be.visible')
        cy.get('p').should('have.text', quideMessage.quickquide)
    })
})