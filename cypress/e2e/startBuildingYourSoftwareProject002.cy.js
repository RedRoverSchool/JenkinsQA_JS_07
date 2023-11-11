/// <reference types="cypress"/>
const LOCAL_PORT = Cypress.env('local.port');
const LOCAL_HOST = Cypress.env('local.host');

import { expectedProjectLabels } from "../fixtures/newJobPage.json"
import { newProjectCreationTitle } from "../fixtures/titlePage.json"

describe('US_02.06 | Dashboard -> Block “Start building your software project”', () => {
    it('TC_02.06.002 | Block “Start building your software project” fields check', () => {
        cy.get('div.empty-state-block > :nth-child(3) h2')
            .should('be.visible')
            .and('have.text', 'Start building your software project')
        cy.get('div.empty-state-block > :nth-child(3) ul li a')
            .should('have.text', 'Create a job')
            .and('have.attr', 'href')
        cy.get('div.empty-state-block > :nth-child(3) ul li a')
            .should('have.attr', 'href')
        cy.get('div.empty-state-block > :nth-child(3) ul li a')
            .should('have.prop', 'href', `http://${LOCAL_HOST}:${LOCAL_PORT}/newJob`)
        cy.get('div.empty-state-block > :nth-child(3) ul li a span.trailing-icon')
            .should('be.visible')
            .parent('div.empty-state-block > :nth-child(3) ul li a')
            .should('have.prop', 'href', `http://${LOCAL_HOST}:${LOCAL_PORT}/newJob`)

        cy.get('div.empty-state-block > :nth-child(3) ul li a').click()
        cy.url().should('eql', `http://${LOCAL_HOST}:${LOCAL_PORT}/newJob`)
        cy.get('head title').should('have.text', newProjectCreationTitle)

        cy.get('#name').should('have.prop', 'tagName', 'INPUT')

        cy.get('#items div ul li label :nth-child(2)')
            .should('have.length', 6)
            .then($els => {
                const namesOfTypes = Cypress.$.makeArray($els).map($el => $el.innerText)
                expect(namesOfTypes).to.deep.equal(expectedProjectLabels)
        })

        cy.get('#ok-button')
            .should('be.visible')
            .and('have.prop', 'tagName', 'BUTTON')
            .and('have.text', 'OK')
    })
})
