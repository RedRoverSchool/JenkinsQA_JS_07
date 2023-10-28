/// <reference types="cypress"/>

import freestyleProject from "../fixtures/freestyleProject.json"

describe('freestyleProject', () => {

    it('TC_04.01.01 | Freestyle project > General > Verify user is able to disable the project', function() {

        cy.get('a[href="newJob"]').click()
        cy.get('input#name').type(freestyleProject.freestyleProjectName)
        cy.get('.hudson_model_FreeStyleProject').click()
        cy.get('#ok-button').click()

        cy.get('.jenkins-toggle-switch__label').click()
        cy.get('.jenkins-toggle-switch__label__unchecked-title')
        .should('have.text', freestyleProject.statusDisabled)
        .and('be.visible')
    })
})