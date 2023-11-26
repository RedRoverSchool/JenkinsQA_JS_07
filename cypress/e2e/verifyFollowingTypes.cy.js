/// <reference types="cypress"/
describe('verifyFolowingTypes', ()=>{
    beforeEach(()=>{
        cy.get('div.task:first-child').click();
    });
    it.skip('TC_03.01.008 |Verify following types of projects: “Freestyle project”, “Pipeline”, “Multi-configuration project”, “Folder”, “Multibranch Pipeline”, “Organization Folder “',()=>{

 
    cy.get('li.hudson_model_FreeStyleProject').should('be.visible');
    cy.get('li.org_jenkinsci_plugins_workflow_job_WorkflowJob').should('be.visible');
    cy.get('li.hudson_matrix_MatrixProject').should('be.visible');
    cy.get('li.com_cloudbees_hudson_plugins_folder_Folder').should('be.visible');
    cy.get('li.org_jenkinsci_plugins_workflow_multibranch_WorkflowMultiBranchProject').should('be.visible');
    cy.get('li.jenkins_branch_OrganizationFolder').should('be.visible');
});
});