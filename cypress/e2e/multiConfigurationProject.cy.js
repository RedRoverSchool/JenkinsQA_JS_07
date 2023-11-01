/// <reference types="cypress"/>

describe('multiConfigurationProject', () => {

    it('TC_03.07.002 | New Item > Create Multiconfiguration project > Add Description', function() {
        cy.get('#tasks > div:nth-child(1) a.task-link').click()
        cy.get('input#name').type('MultiConfiguration project')
        cy.get('li[tabindex="0"] span').contains('Multi-configuration project').click()
        cy.get('#ok-button').click()
        cy.get('div.jenkins-section textarea.jenkins-input').type('Description')
        cy.get('button[name="Submit"]').click()

        cy.get('#description > div:nth-child(1)').should('have.text', 'Description')
       })
})