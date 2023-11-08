/// <reference types="cypress"/>

import messages from '../fixtures/messages.json'
import { pipelineName } from '../fixtures/pipelineProject.json'

describe('Pipeline > Delete Pipeline', () => {

    beforeEach(()=>{
       cy.get("a[href='/view/all/newJob']").click();
       cy.get("input[class='jenkins-input']").type(`${pipelineName}`);
       cy.get('li.org_jenkinsci_plugins_workflow_job_WorkflowJob > div.icon').click();
       cy.get('#ok-button').click();
    });

    it('TC_05.05.003 | Pipeline > Delete Pipeline > Delete Pipeline using left side menu /from project page', () =>{
        cy.url().should('include', `${pipelineName}`);
        cy.get('#jenkins-home-link').click();
        cy.get('tbody tr td a.jenkins-table__link').click();
        cy.get('.icon-edit-delete').click();

        cy.get('#main-panel h1').should('be.visible').and('have.text', 'Welcome to Jenkins!');
        cy.get('#search-box').type(`${pipelineName}`+ '{enter}');
        cy.get('.error').should('have.text', messages.searchForErroeMessage);  
    });      
});