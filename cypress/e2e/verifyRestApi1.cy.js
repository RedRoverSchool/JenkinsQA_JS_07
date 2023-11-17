/// <reference types="cypress" />
import restApi from "../fixtures/restApi.json"

describe.skip('Footer > Access to REST API ', () => {
    it('TC__15.01.03 | Verify "REST API" link in the footer will redirect user to REST API page', () => {
        cy.get('a.jenkins-button.jenkins-button--tertiary.rest-api').click()

        cy.get('div#main-panel > h1').should('be.visible').and('have.text', restApi.header)
        cy.get('div#main-panel > p').should('include.text', restApi.text)
        cy.url().should('include', restApi.link)
    })
})