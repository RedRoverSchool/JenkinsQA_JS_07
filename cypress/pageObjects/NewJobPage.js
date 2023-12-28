import MultiConfigProjectConfigurePage from "../pageObjects/MultiConfigProjectConfigurePage";
import FreestyleProjectConfigurePage from "../pageObjects/FreestyleProjectConfigurePage";
import FolderConfigurePage from "../pageObjects/FolderConfigurePage";
import PipelineConfigurePage from "../pageObjects/PipelineConfigurePage";
const HOST = Cypress.env('local.host');
const PORT = Cypress.env('local.port');

class NewJobPage {
    getTitlePage = () => cy.get('.h3');
    getErrorMessage = () => cy.get('#itemname-required');
    getTypeOfProject = () => cy.get('.label');
    getTypeProject = () =>cy.get('ul[class="j-item-options"]>li');

    getInputNameField = () => cy.get('input#name');
    getFreestyleProjectBtn = () => cy.get('li.hudson_model_FreeStyleProject');
    getPipelineTypeOfProjectBtn = () => cy.get('li.org_jenkinsci_plugins_workflow_job_WorkflowJob');
    getMultiConfigTypeOfProjectBtn = () => cy.get('li.hudson_matrix_MatrixProject');
    getOKButton = () => cy.get('#ok-button');
    getFolderBtn =() => cy.get('li.com_cloudbees_hudson_plugins_folder_Folder')
    getMultibranchPipelineBtn = () => cy.get('li.org_jenkinsci_plugins_workflow_multibranch_WorkflowMultiBranchProject')
    getOrganizationFolder = () => cy.get('li.jenkins_branch_OrganizationFolder');
    getFreestyleTypeOfProjectBtn = () => cy.get('.hudson_model_FreeStyleProject');
    getTypeOfProjectLabels = () => cy.get(".label");
    getCopyField =() => cy.get('div.item-copy');
    getCopyFieldInput =() => cy.get('#from.jenkins-input.auto-complete');
    getCopyFieldOKButton =() => cy.get('.jenkins-button--primary');
    getFolderBtn = () => cy.get(".com_cloudbees_hudson_plugins_folder_Folder");
    getPipelineProjectNameLink = () => cy.get('.label');
    getNewJobPageUrl = () => cy.url();
    getNewJobPageTitle = () => cy.get('label[for="name"]');
    getInputValidationMessage = () => cy.get("div[class='input-validation-message']");
    getHeaderNewJobPageText = () => cy.get('.h3');
    getEmptyFieldWarning = () => cy.get('form div#itemname-required');


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
 
      clickPipelineTypeOfProjectBtn() {
        this.getPipelineTypeOfProjectBtn().click();
    
        return this;
    }

    clickOKButtonPipelineProject(){
        this.getOKButton().click()

        return new PipelineConfigurePage()
      }

    checkNewJobPageUrl() {
        this.getNewJobPageUrl().should('be.eql',`http://${HOST}:${PORT}/view/all/newJob`)
      }
<<<<<<< HEAD
    
      verifyTitleText(title)
      {
          this.getTitlePage().should('be.visible').and('have.text',title)
          return this
      }
  
      verifyTextField()
      {
          this.getInputNameField().should('be.visible')
          return this
      }
  
      verifyErrorMessage(message)
      {
          this.getTitlePage().click()
          this.getErrorMessage().should('have.text',message)
          return this
      }
  
      verifyListOfTypeProgect(list)
      {
          this.getTypeOfProject().each(($el,i) => {
              cy.wrap($el).should('have.text', list[i])
          })
      }
      
      verifyTextFieldEmpty()
      {
          this.getTitlePage().click()
          this.getErrorMessage().should('be.visible')
          return this
      }
  
      notSelectTypesInactiveButton()
      {
          this.getTypeProject().each(($el,i) => {
              cy.wrap($el)
              this.getTypeProject().eq(i).invoke('attr','aria-checked').should('eql','false')
              this.getOKButton().should('be.disabled')
          })
          return this
      }
  
      selectTypesInactiveButton()
  {
      this.getTypeProject().each(($el,i) => {
          cy.wrap($el).click()
          this.getTypeProject().eq(i).invoke('attr','aria-checked').should('eql','true')
          this.getOKButton().should('be.disabled')
      })
      return this
  }
  
  selectTypesActiveButton()
  {
      this.getTypeProject().each(($el,i) => {
          cy.wrap($el).click()
          this.getTypeProject().eq(i).invoke('attr','aria-checked').should('eql','true')
          this.getOKButton().should('be.enabled')
      })
      return this
  }
  
      typeTextField()
      {
          this.getInputNameField().type('cdcdc')
          return this
      }
=======
   
    clickCopyField(){
        this.getCopyField().click()

        return this;
    }

    fillCopyFromField(name){
        this.getCopyFieldInput().type(name);

        return this;
    }

    clickOKButton() {
        this.getOKButton().click();

        return this;
    }

    clickHeader() {
        this.getHeaderNewJobPageText().click();

        return this;
    };
>>>>>>> 2d9347233e748e407f4fcca1fcdfe9e27aeff896
}
export default NewJobPage;