/// <reference types="cypress"/>

import { JenkinsHome } from "../fixtures/logoAndTitle.json"
describe.skip('logoAndTitleOnDashboadPage',() => {
    it('TC_02.02.003 | Verify visibility of Jenkins logo and title on Dashboard page',() => {
        cy.get('#jenkins-head-icon').should('be.visible')
        cy.get('#jenkins-name-icon').should('be.visible')
        cy.get('a[href="/asynchPeople/"]').click()
        cy.get('#jenkins-home-link').click()
        cy.get('h1').should('be.visible').and('have.text', JenkinsHome.frontPage)
        cy.get('#jenkins-head-icon').should('be.visible')
        cy.get('#jenkins-name-icon').should('be.visible')
    });
});