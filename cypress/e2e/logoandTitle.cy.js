/// <reference types="cypress"/>
import { JenkinsHome } from '../fixtures/logoAndTitle.json'
describe.skip('Logo and Title', () => {

  it('TC_02.02.01 |Verify Jenkins Logo and Title', function () {
    cy.get('#jenkins-home-link').should('be.visible')

    cy.get('a[href="/view/all/newJob"]').click()
    cy.get('#jenkins-home-link').click()
    cy.get('.empty-state-block h1').should('have.text', JenkinsHome.frontPage).and('be.visible')
  })
})