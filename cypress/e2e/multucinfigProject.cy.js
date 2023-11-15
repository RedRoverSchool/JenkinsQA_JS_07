/// <reference types = "cypress" />

describe('multuconfigProject', () => {
       it('Create Multiconfiguration project', function() {

        cy.get('a[href="newJob"]').click()
        cy.get('input#name').type('Project1')
        cy.get('li[tabindex="0"] span').contains('Multi-configuration project').click()

        cy.get('td a[href*="job"].jenkins-table__link').should('have.text', 'Project1')
       })
})