import FolderConfigurePage from "./FolderConfigurePage";
import DeleteFolderPage from "./DeleteFolderPage";
import NewJobPage from "./NewJobPage";

class FolderPage {
  getConfigureLink = () => cy.get("a[href*='configure']");
  getAddDescriptionLink = () => cy.get("#description-link");
  getPreviewLink = () => cy.get('a.textarea-show-preview');
  getTextAreaPreview = () => cy.get('div.textarea-preview');
  getHidePreviewLink = () => cy.get('a.textarea-hide-preview');
  getDisplayFolderName = () => cy.get('h1');
  getDiscriptionFolderMessage = () => cy.get('#view-message');
  getInputField  =() => cy.get('.jenkins-input');
  getSaveButton = () => cy.get('button.jenkins-button.jenkins-button--primary ');
  getFolderPageUrl = () => cy.url();
  getRenameLink = () => cy.get(".task").contains("Rename");
  getNewFolderName = () => cy.get("#main-panel h1");
  getDescriptionText = () => cy.get('#description :first-child');
  getDeleteFolderIcon = () => cy.get('a .icon-edit-delete');
  getNewItemOnFolderPage = () => cy.get('a[href*="/newJob"]');
  
  clickConfigureLink() {
    this.getConfigureLink().click();

    return new FolderConfigurePage();
  }
  clickAddDescriptionLink() {
    this.getAddDescriptionLink().click();

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
    this.getHidePreviewLink().click();
    return this;
  }

  clickFolderRenameBtn() {
    this.getRenameLink().click();
    return new FolderConfigurePage()
  }

 clickSaveButton () {
    this.getSaveButton().click();
    return this;
  }

  clickDeleteFolderIcon(){
    this.getDeleteFolderIcon().click();
    return new DeleteFolderPage();
  }
  
  renameFolder(newName) {
    return this.clickFolderRenameBtn()
      .fillNewNameField(newName)
      .clickBtnConfirmRenameFolder();
  }

  clickNewItemOnFolderPage(){
    this.getNewItemOnFolderPage().click();

    return new NewJobPage();
  }
}
export default FolderPage;

