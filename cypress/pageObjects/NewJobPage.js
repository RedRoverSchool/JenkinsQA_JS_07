import MultiConfigProjectConfigurePage from "../pageObjects/MultiConfigProjectConfigurePage";
import FreestyleProjectConfigurePage from "../pageObjects/FreestyleProjectConfigurePage";
import FolderConfigurePage from "../pageObjects/FolderConfigurePage";
import PipelineConfigurePage from "../pageObjects/PipelineConfigurePage";
class NewJobPage {
    getInputNameField = () => cy.get('input#name');
    getMultiConfigTypeOfProjectBtn = () => cy.get('li.hudson_matrix_MatrixProject');
    getOKButton = () => cy.get('#ok-button');
    getFreestyleTypeOfProjectBtn = () => cy.get('.hudson_model_FreeStyleProject');
    getTypeOfProjectLabels = () => cy.get(".label");
    getFolderBtn = () => cy.get(".com_cloudbees_hudson_plugins_folder_Folder");
    getPipelineProjectNameLink = () => cy.get('.label');
    getPipelineTypeOfProjectBtn = () => cy.get('li.org_jenkinsci_plugins_workflow_job_WorkflowJob')
    
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
    
    collectTypeOfProjectLabels(){
        this.getTypeOfProjectLabels().as("labelName");

        return this;
    }

    clickFolderBtn(){
        this.getFolderBtn().click();

        return this;
    }

    clickOKButtonFolder(){
        this.getOKButton().click();

        return new FolderConfigurePage();
    }

    clickgetPipelineProjectNameLink() {
        this.getPipelineProjectNameLink().click
        
        return this
      }

      clickPipelineTypeOfProjectBtn(){
        this.getPipelineTypeOfProjectBtn().click()
        return this
      }

      clickOKButtonPipelineProject(){
        this.getOKButton().click()

        return new PipelineConfigurePage()
      }
 
}
export default NewJobPage;