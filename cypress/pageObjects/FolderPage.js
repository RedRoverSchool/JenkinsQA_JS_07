import FolderConfigurePage from "./FolderConfigurePage";

class FolderPage {
  getConfigureLink = () => cy.get("a[href*='configure']");
  getAddDescriptionLink = () => cy.get("#description-link");
  getPreviewLink = () => cy.get('a.textarea-show-preview');
  getTextAreaPreview = () => cy.get('div.textarea-preview');
  getHidePreviewLink = () => cy.get('a.textarea-hide-preview');
  getDisplayFolderName = () => cy.get('h1');
  getDiscriptionFolderMessage = () => cy.get('#view-message');
  getInputField  =() => cy.get('.jenkins-input');
  getSaveButton = () =>cy.get('button.jenkins-button.jenkins-button--primary ');
  getFolderPageUrl = () => cy.url();;
  getHealthMetricsBtn = () => cy.get('button.advancedButton');
  getPropertiesAddBtn = () => cy.get('button[class="jenkins-button repeatable-add"]');
  getSidePanelLinks = () => cy.get('div.task>.task-link-wrapper>.task-link');
  getRenameLink = () => cy.get(".task").contains("Rename");
  getNewFolderName = () => cy.get("#main-panel h1")

  
 
  clickConfigureLink() {
    this.getConfigureLink().click();

    return new FolderConfigurePage();
  }

  clickAddDescriptionLink() {
    this.getAddDescriptionLink().click();

    return this;
  }
  clickHealthMetricsBtn() {
    this.getHealthMetricsBtn().click();
    return this;
  }

clickPropertiesAddBtn() {
  this.getPropertiesAddBtn().click();
  return this;
}

  typeInputField(text){
    this.getInputField().type(text);
    return this;
  }

  clickPreviewLink() {
    this.getPreviewLink().click();
    return this;
  }
  clickHidePreviewLink () {
    this. getHidePreviewLink ().click();
    return this;
  }

 
  clickFolderRenameBtn() {
    this.getRenameLink().click();
    return new FolderConfigurePage()
  }

}
export default FolderPage;

