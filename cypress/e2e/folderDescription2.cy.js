/// <reference types="cypress"/>

import folderDescription1 from "../fixtures/folderDescription1.json"

const port = Cypress.env("local.port")
const host = Cypress.env('local.host')

describe('folderDescription2',() => {
    it('TC_07.02.005 | Folder > Description > Verify that button “Preview” is visible and clickable', () => {
        cy.get('a[href="/view/all/newJob"]').click()
        cy.get('#name').type(folderDescription1.folderName)
        cy.get('span[class="label"]').contains('Folder').click()
        cy.get('#ok-button').click()
        cy.visit(`http://${host}:${port}/job/${folderDescription1.folderName}/`)
        cy.get('#description-link').click()
        cy.get('textarea[name="description"]').type(folderDescription1.descriptionInput)
        cy.get('button[formnovalidate]').click()

        cy.get('#description-link').click()
        cy.get('a[class="textarea-show-preview"]').should('be.visible').click()
        cy.get('div[class="textarea-preview"]').should('be.visible').and('have.text', folderDescription1.descriptionInput)
        cy.get('a[class="textarea-hide-preview"]').should('be.visible')
    })
})