/// <reference types = 'cypress' />

import StartaNewProject from "../fixtures/ClickableLinksJenkinsData.json";

describe('ClickableLinksJenkins', () => {
    it('TC_03.13.09 I Verify logo and Clickable links of Jenkins', () => {
        cy.get('.task-link-wrapper').contains('New Item').click()
        cy.get('.add-item-name').contains('Enter an item name').should('be.visible')
        cy.get('input#name').type('Start a New project')
        cy.get('.label').contains('Organization Folder').click()
        cy.get('a[href="/"]').contains('Dashboard').click()
        cy.get('.task-link-wrapper').contains('My Views').click()
        cy.get('.h4').should('be.visible')
        cy.get('a[href="newJob"]').contains('Create a job').click()
    });
});
