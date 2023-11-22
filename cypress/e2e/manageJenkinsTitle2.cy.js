/// <reference types="cypress"/>

import manageJenkinsTitle from "../fixtures/manageJenkinsTitle.json"

describe.skip('manageJenkinsTitle2', () => {

    it('TC_09.01.006 | Manage Jenkins > Title', function() {
        cy.get('.task-link-wrapper  > a[href="/manage"]').click()
        cy.get('.jenkins-app-bar__content > h1').should('be.visible').and('have.text', manageJenkinsTitle.mainHeaderPage)
    })
})