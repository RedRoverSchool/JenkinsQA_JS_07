/// <reference types="cypress"/>

import pipelineProject from '../fixtures/pipelineProject.json'

describe('New Item > Create Pipeline Project > Configure new Pipeline project', () => {
   beforeEach("createPipelineProject", () => {
      cy.get("a[href='/view/all/newJob']").click();
      cy.get("input[class='jenkins-input']").type(pipelineProject.pipelineName);
      cy.get('li.org_jenkinsci_plugins_workflow_job_WorkflowJob > div.icon').click();
      cy.get('#ok-button').click();
   });

    it('TC_03.05.004 | New Item > Create Pipeline Project > Configure new Pipeline project >Verify quantity of elements of Configure menu', function () {
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
    
    it('TC_03.05.005 | New Item > Create Pipeline Project > Configure new Pipeline project > Check the help button Discard old builds', () => {
       cy.get('#cb2')
         .parents('.jenkins-checkbox-help-wrapper')
         .find('a')
         .click()         
         .parents('.optionalBlock-container.jenkins-form-item')
         .wait(2000)
         .find('.help')
         .should('be.visible')
         .then($el =>  {
            expect($el.get(0).innerText).to.eq(pipelineProject.discardOldBuildsHelpText);
         });
   });
});
