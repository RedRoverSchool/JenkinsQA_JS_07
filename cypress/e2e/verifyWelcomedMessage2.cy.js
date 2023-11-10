/// <reference types="cypress"/>

import WelcomeToJenkins from "../fixtures/WelcomeToJenkins.json"

describe('verifyWelcomedMessage2', () => {

    it('TC_02.03.016 | Dashboard > Verify Welcomed MessageChannel', function() {
        cy.get('.empty-state-block h1').should('be.visible').and('have.text', WelcomeToJenkins.mainPageTitle)
    })
})