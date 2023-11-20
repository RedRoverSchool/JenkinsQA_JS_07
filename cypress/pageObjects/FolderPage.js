import FolderConfigurePage from "./FolderConfigurePage";

class FolderPage {
  getConfigureLink = () => cy.get("a[href*='configure']");
  getAddDescriptionLink = () => cy.get("#description-link");
  getPreviewLink = () => cy.get('a.textarea-show-preview');
  getInputField  =() => cy.get('.jenkins-input');
  getSaveButton = () =>cy.get('button.jenkins-button.jenkins-button--primary ')
  
  clickConfigureLink() {
    this.getConfigureLink().click();

    return new FolderConfigurePage();
  }

  clickAddDescriptionLink() {
    this.getAddDescriptionLink().click();

    return this;
  }

  
}

export default FolderPage;

