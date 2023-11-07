/// <reference types="cypress"/>

import pipelineProject from '../fixtures/pipelineProject.json'

describe('New Item > Create Pipeline Project > Configure new Pipeline project', () => {

    it('TC_03.05.004 | New Item > Create Pipeline Project > Configure new Pipeline project >Verify quantity of elements of Configure menu', function () {
       cy.get("a[href='/view/all/newJob']").click();
       cy.get("input[class='jenkins-input']").type(pipelineProject.pipelineName);
       cy.get('li.org_jenkinsci_plugins_workflow_job_WorkflowJob > div.icon').click();
       cy.get('#ok-button').click();

       cy.url().should('include', '/configure')
       cy.get('h1').should('have.text', pipelineProject.pipelineConfigurePageHeader);

       cy.get("div.task")
       .should("have.length", pipelineProject.configureMenuLength)
       .then(($els) => {
          return Cypress.$.makeArray($els)
          .map(($el) => $el.innerText)
       })
      .should('deep.eql', pipelineProject.expectedConfigureMenuItems)
    });
});
