/// <reference types="cypress"/>
import multiConfigProjectA from "../fixtures/multiConfigProjectA.json"
describe.skip('multiConfigProjectA', () => {

    it('Create Multiconfiguration project', () => {
        cy.get('a[href="/view/all/newJob"]').click()
        cy.get('input#name').type(multiConfigProjectA.ProjectName)
        cy.get('li[tabindex="0"] span').contains('Multi-configuration project').click()
        cy.get('#ok-button').click()
        cy.get('.jenkins-breadcrumbs__list-item:nth-child(1)').click()

        cy.get('td a[href*="job"].jenkins-table__link').should('have.text', multiConfigProjectA.ProjectName)
    });
})