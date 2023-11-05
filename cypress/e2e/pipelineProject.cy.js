/// <reference types="cypress"/>

import pipelineProject from '../fixtures/pipelineProject.json'


describe('New Item > Create Pipeline Project > Configure new Pipeline project', () => {

    it('TC_03.05.004 | New Item > Create Pipeline Project > Configure new Pipeline project > Verify quantity of elements of Configure menu', function () {
       cy.get("a[href='/view/all/newJob']").click();
       cy.get("input[class='jenkins-input']").type(pipelineProject.pipelineName);
       cy.get('li.org_jenkinsci_plugins_workflow_job_WorkflowJob > div.icon').click();
       cy.get('#ok-button').click();

       cy.url().should('be.equal', 'http://localhost:8080/job/FirstPipelineProject/configure');
       cy.get('h1').should('have.text', 'Configure');

       cy.get("div #tasks [class='task']")
       .then(($els) => {
        return Cypress.$.makeArray($els);
    })
      .should("have.length", "3")
    })
})
