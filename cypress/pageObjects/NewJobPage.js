import MultiConfigProjectConfigurePage from "../pageObjects/MultiConfigProjectConfigurePage";
import FreestyleProjectConfigurePage from "../pageObjects/FreestyleProjectConfigurePage";
import FolderConfigurePage from "../pageObjects/FolderConfigurePage"
const HOST = Cypress.env('local.host');
const PORT = Cypress.env('local.port');
class NewJobPage {
    getInputNameField = () => cy.get('input#name');
    getMultiConfigTypeOfProjectBtn = () => cy.get('li.hudson_matrix_MatrixProject');
    getOKButton = () => cy.get('#ok-button');
    getFreestyleTypeOfProjectBtn = () => cy.get('.hudson_model_FreeStyleProject');
    getTypeOfProjectLabels = () => cy.get(".label");
    getFolderBtn = () => cy.get(".com_cloudbees_hudson_plugins_folder_Folder");
    getPipelineProjectNameLink = () => cy.get('.label');
    getNewJobPageUrl = () => cy.url();
    getNewJobPageTitle = () => cy.get('label[for="name"]');
    
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
      checkNewJobPageUrl() {
        this.getNewJobPageUrl().should('be.eql',`http://${HOST}:${PORT}/view/all/newJob`)
      }
 
}
export default NewJobPage;