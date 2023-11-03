/// <reference types="cypress"/>

import freestyleProject from "../fixtures/freestyleProject.json"

describe('freestyleProject', () => {

    beforeEach('create freestyle project', () => {
        cy.get('a[href="newJob"]').click()
        cy.get('input#name').type(freestyleProject.freestyleProjectName)
        cy.get('.hudson_model_FreeStyleProject').click()
        cy.get('#ok-button').click()  
    })

    it('TC_04.01.01 | Freestyle project > General > Verify user is able to disable the project', function() {
        
        cy.get('.jenkins-toggle-switch__label').click()
        cy.get('.jenkins-toggle-switch__label__unchecked-title')
          .should('have.text', freestyleProject.statusDisabled)
          .and('be.visible')
    })

    it('TC_04.01.10 | Freestyle project > General > Verify the following options with check boxes are displayed', () => {

        cy.get('[nameref="rowSetStart30"] .jenkins-checkbox')
          .should('have.length', freestyleProject.generalCheckboxes.length)
          .and('be.visible')
          .each(($elm, idx) => {
            expect($elm.text()).to.be.eq(freestyleProject.generalCheckboxes[idx])
        cy.get('[nameref="rowSetStart30"] [type="checkbox"]').check({force: true}).should('be.checked')
        })
    })
})