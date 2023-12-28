/// <reference types="cypress"/>
import multiconfigProject33 from "../fixtures/multiconfigProject33.json"

describe.skip('multiconfigProject014', () => {

    it('TC_03.06.014 | New Item > Create Multiconfiguration project', function() {
        cy.get('a[href="newJob"]').click()
        cy.get('input#name').type(multiconfigProject33.projectName)
        cy.get('li[tabindex="0"] span').contains(multiconfigProject33.typeOfProject).click()
        cy.get('#ok-button').click()
        cy.get('.jenkins-breadcrumbs__list-item:nth-child(1) > .model-link').click()
        cy.get('td a[href*="job"].jenkins-table__link').should('have.text', multiconfigProject33.projectName)
    })
})
