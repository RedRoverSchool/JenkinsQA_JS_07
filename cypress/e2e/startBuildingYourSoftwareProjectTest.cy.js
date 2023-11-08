/// <reference types="cypress"/>
import {expectedProjectLabels}from '../fixtures/newJobPage.json'
describe('startBuildingYourSoftwareProjectTest',() => {
    it('TC_02.06.001 |Block “Start building your software project” > Verify "Start building your software project” is displayed',() => {
        cy.get('h2.h4').should('be.visible');
    });

    it('TC_02.06.003 | Block "Start building your software project" > Option “Create a job” leads to the page “New Job”',() => {
        cy.get('a[href="newJob"]').click()
        cy.url().should('include','/newJob')
        cy.get('.h3').should('be.visible').and('have.text','Enter an item name')
    });

    it.only('TC_02.06.006 | Block "Start building your software project" > "Arrow" icon is visible and clickable',() => {
        cy.get('a[href="newJob"] svg').should('be.visible')
        cy.get('a[href="newJob"] svg').click()
        cy.url().should('include','/newJob')
        cy.get('.label').then(($els) => {
        const ProjectLabels = Cypress._.map(Cypress.$.makeArray($els),'textContent');
        expect(ProjectLabels).to.be.deep.equal(expectedProjectLabels)
    })
    });
})
