/// <reference types="cypress"/>

describe.skip('multiconfigProject', () => {

    it('Create Multiconfiguration project', function() {
        cy.get('a[href="newJob"]').click()
        cy.get('input#name').type('Project1')
        cy.get('li[tabindex="0"] span').contains('Multi-configuration project').click()
        cy.get('#ok-button').click()
        cy.get('.jenkins-breadcrumbs__list-item:nth-child(1) > .model-link').click()

        cy.get('td a[href*="job"].jenkins-table__link').should('have.text', 'Project1')
    })

    it('TC_03.06.006 | Create Multiconfiguration project', () => {
        cy.get('a[href="/view/all/newJob"]').click()
        cy.get('input#name').type('Project1')
        cy.get('li[tabindex="0"] span').contains('Multi-configuration project').click()
        cy.get('#ok-button').click()
        cy.get('button').contains('Save').click()
        cy.get('.jenkins-breadcrumbs__list-item:nth-child(1) > .model-link').click()
        cy.get('td a[href*="job"].jenkins-table__link').should('have.text', 'Project1')
    })
})
