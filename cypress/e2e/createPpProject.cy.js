/// <reference types="cypress"/>

const randomName = Math.random().toString(36).substring(7);

describe('New Item > Create Pipeline project', () => {

    it('TC_03.04.011 | New item > pipeline project > Configure page', () => {
        cy.get('a[href="/view/all/newJob"]').click();
        cy.get('input.jenkins-input#name').type(randomName);
        cy.get('.org_jenkinsci_plugins_workflow_job_WorkflowJob').click();
        cy.get('#ok-button').click();

        cy.url().should('contain', `/${randomName}/configure`);
        cy.get('#side-panel .jenkins-app-bar__content').should('have.text', 'Configure');
    });
    
});