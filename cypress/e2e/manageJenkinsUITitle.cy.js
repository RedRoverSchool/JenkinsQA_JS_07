/// <reference types="cypress"/>
import manageJenkinsUITitle from "../fixtures/manageJenkinsUITitle.json"

describe.skip('Manage Jenkins > Title', () => {
    beforeEach(() => {
        cy.get('a[href="/manage"]').click()
        cy.url().should('include', manageJenkinsUITitle.url)
    })

    it('TC_09.01.005 | Manage Jenkins > UI Verification of Title', () => {
        cy.get('.jenkins-app-bar h1')
            .should('be.visible')
            .and('have.text', manageJenkinsUITitle.headerName)
            .and('have.prop', 'tagName', 'H1');
    })
})