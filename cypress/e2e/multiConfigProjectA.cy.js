/// <reference types="cypress"/>

describe('multiConfigProjectA', () => {

    it('Create Multiconfiguration project', () => {
        cy.get('a[href="/view/all/newJob"]').click()
        cy.get('input#name').type('Project073')
        cy.get('li[tabindex="0"] span').contains('Multi-configuration project').click()
        cy.get('#ok-button').click()
        cy.get('.jenkins-breadcrumbs__list-item:nth-child(1)').click()

        cy.get('td a[href*="job"].jenkins-table__link').should('have.text', 'Project073')

    });
})