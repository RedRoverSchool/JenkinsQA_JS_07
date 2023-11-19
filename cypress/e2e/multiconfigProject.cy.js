/// <reference types="cypress"/>

import multiconfigProject from "../fixtures/multiconfigProject.json";

describe.skip('multiconfigProject', () => {

    it('Create Multiconfiguration project', function() {

        cy.get('a[href="newJob"]').click()
        cy.get('input#name').type(multiconfigProject.projetcName)
        cy.get('li[tabindex="0"] span').contains(multiconfigProject.descMultiConfigurationProject).click()
        cy.get('#ok-button').click()
        cy.get('.jenkins-breadcrumbs__list-item:nth-child(1) > .model-link').click()

        cy.get('td a[href*="job/Project1"].jenkins-table__link').should('have.text', multiconfigProject.projetcName)
    })
})
