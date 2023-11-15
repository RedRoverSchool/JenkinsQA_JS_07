/// <reference types="cypress"/>

import multiconfigProject from "../fixtures/multiconfigProject.json";

describe('displayedNameisShown', () => {

    it('Verify displayed name is shown', () => {
        cy.get('a[href="newJob"]').click()
        cy.get('input#name').type(multiconfigProject.projetcName)
        cy.get('li[tabindex="0"] span').contains('Multi-configuration project').click()
        cy.get('#ok-button').click()
        cy.get('section.jenkins-section>div.jenkins-form-item.tr.jenkins-form-item--tight button').click()
        cy.get('input[name="_.displayNameOrNull"]').type('ProjectOne')
        cy.get('[name="Submit"]').click()
        
        cy.get('h1.page-headline').should('have.text', 'Project ProjectOne')
    })  
})
