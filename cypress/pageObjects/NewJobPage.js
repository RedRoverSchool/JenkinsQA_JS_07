import MultiConfigProjectConfigurePage from "../pageObjects/MultiConfigProjectConfigurePage";
import FreestyleProjectConfigurePage from "../pageObjects/FreestyleProjectConfigurePage"
class NewJobPage {
    getInputNameField = () => cy.get('input#name');
    getFreestyleProjectBtn = () => cy.get('li.hudson_model_FreeStyleProject');
    getPipelineBtn = () => cy.get('li.org_jenkinsci_plugins_workflow_job_WorkflowJob');
    getMultiConfigTypeOfProjectBtn = () => cy.get('li.hudson_matrix_MatrixProject');
    getOKButton = () => cy.get('#ok-button');
    getFolderBtn =() => cy.get('li.com_cloudbees_hudson_plugins_folder_Folder')
    getMultibranchPipelineBtn = () => cy.get('li.org_jenkinsci_plugins_workflow_multibranch_WorkflowMultiBranchProject')
    getOrganizationFolder = () => cy.get('li.jenkins_branch_OrganizationFolder');
    getFreestyleTypeOfProjectBtn = () => cy.get('.hudson_model_FreeStyleProject');
    


    fillInputNameField(nameProject) {
        this.getInputNameField().should('be.visible').type(nameProject);

        return this;
    }

    clickMultiConfigTypeOfProjectBtn() {
        this.getMultiConfigTypeOfProjectBtn().click();

        return this;
    }

    clickOKButton() {
        this.getOKButton().click();

        return new MultiConfigProjectConfigurePage();
    }

    clickFreestyleTypeOfProjectBtn() {
        this.getFreestyleTypeOfProjectBtn().click();

        return this;
    }
    
    clickOKButtonFreestyle() {
        this.getOKButton().click();

        return new FreestyleProjectConfigurePage();
    }
 
}
export default NewJobPage;