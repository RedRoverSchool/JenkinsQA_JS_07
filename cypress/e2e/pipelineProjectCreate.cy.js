/// <reference types="cypress"/>

describe('Create Pipeline Project', () => {

    it('TC_03.04.001 | New Item > Create Pipeline project ', function() {
        cy.get('a[href="newJob"]').click()
        cy.get('input#name').type('Pipeline Project1')
        cy.get('li[tabindex="0"] span').contains('Pipeline').click()
        cy.get('#ok-button').click()
        cy.get('.jenkins-breadcrumbs__list-item:nth-child(1) > .model-link').click()

        cy.get('td a[href*="job"].jenkins-table__link').should('have.text', 'Pipeline Project1')
    })
})