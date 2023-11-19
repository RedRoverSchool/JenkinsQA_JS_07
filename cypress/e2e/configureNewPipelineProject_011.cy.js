/// <reference types="cypress"/>

import configureNewPipelineProject_011 from "../fixtures/configureNewPipelineProject_011.json"

describe('configureNewPipelineProject_011', () => {
   
   it('TC_03.05.011 Verify to add and visible a Display Name', function() {
      cy.get(':nth-child(1) > .task-link-wrapper > .task-link').click();
      cy.get('#name').type(configureNewPipelineProject_011.projectName);
      cy.get('.org_jenkinsci_plugins_workflow_job_WorkflowJob > label > .label').click();
      cy.get('#ok-button').click();
      cy.get('#jenkins-name-icon').click();

      cy.get('td>a[href="job/FirstPipelineProject/"]').click();
      cy.get(':nth-child(5) > .task-link-wrapper > .task-link').click();
      cy.get(':nth-child(8) > :nth-child(2) > .advancedLink > .jenkins-button').click();
      cy.get(':nth-child(8) > .tbody > .jenkins-form-item > .setting-main > .jenkins-input').type(configureNewPipelineProject_011.displayName);
      cy.get('.jenkins-button--primary').click();
     
      cy.get('.job-index-headline').should('contain', configureNewPipelineProject_011.displayName);
      cy.get('#breadcrumbs > :nth-child(3) > .model-link').should('have.text', configureNewPipelineProject_011.displayName);
   })

})   