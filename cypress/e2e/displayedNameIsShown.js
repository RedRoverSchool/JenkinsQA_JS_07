/// <reference types="cypress"/>

describe('displayedName', () => {

    it('Verify displayed name is shown', () => {
        cy.get('a[href="newJob"]').click()
        cy.get('input#name').type('MulticonfigProject')
        cy.get('li[tabindex="0"] span').contains('Multi-configuration project').click()
        cy.get('#ok-button').click()
        cy.get('button.jenkins-button.advanced-button.advancedButton').click()
        cy.get('input[name="_.displayNameOrNull"]').type('ProjectOne')
        cy.get('[name="Submit"]').click()
        cy.get('h1.page-headline').should('have.text', 'ProjectOne')
    })

    
})
