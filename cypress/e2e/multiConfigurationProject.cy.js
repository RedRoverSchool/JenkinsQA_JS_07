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

    it('TC_03.07.003 | New Item > Create Multiconfiguration project > Disable project', function() {
        cy.get('#tasks > div:nth-child(1) a.task-link').click()
        cy.get('input#name').type('MultiConfiguration project')
        cy.get('li[tabindex="0"] span').contains('Multi-configuration project').click()
        cy.get('#ok-button').click()
        cy.get('#toggle-switch-enable-disable-project > label').click()
        cy.get('#toggle-switch-enable-disable-project span.jenkins-toggle-switch__label__unchecked-title').should('have.text', 'Disabled')
        cy.get('button[name="Submit"]').click()

        cy.get('#enable-project').should('contain.text', 'This project is currently disabled')
    })

    it('TC_03.07.002 | Check the formatting in the text area "Description" by clicking on "Preview"', function() {
        cy.get('#tasks > div:nth-child(1) a.task-link').click()
        cy.get('input#name').type('MultiConfiguration project')
        cy.get('li[tabindex="0"] span').contains('Multi-configuration project').click()
        cy.get('#ok-button').click()
        cy.get('div.jenkins-section textarea.jenkins-input').type('description')
        cy.get('a.textarea-show-preview').click()

        cy.get('div.textarea-preview').should('have.text', 'description')
    })
})
