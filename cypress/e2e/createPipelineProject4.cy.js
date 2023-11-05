/// <reference types="cypress"/>

describe('createPipelineProject', () => {
  
  beforeEach(function() {
    cy.fixture('createPipelineProject4').then((allNames) => {
        this.allNames = allNames;
      });
    });

  it('TC_03.04.004 | Create Pipeline project4', function () {
     
      cy.get("a[href='/view/all/newJob']").click();
      cy.get('#name').type(this.allNames.newProjectName);
      cy.get('.label').contains('Pipeline').click();
      cy.get('#ok-button').click();
      cy.get('#breadcrumbs > li:nth-child(1) > a').click();
      cy.get('td:nth-child(3) > a > span').should('have.text', this.allNames.newProjectName)

  })

  it('TC_03.04.009 | Check input-validation-message', function () {
    cy.get("a[href='/view/all/newJob']").click();
    cy.get('li.org_jenkinsci_plugins_workflow_job_WorkflowJob > div.icon').click();

    cy.get("div[class='input-validation-message']").should('be.visible');
    cy.get('#ok-button').should('be.disabled');
  })
})