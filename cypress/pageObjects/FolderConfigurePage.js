import FolderPage from "./FolderPage";

class FolderConfigurePage {
  getSaveBtn = () => cy.get('button[name="Submit"]');
  getFolderConfigurePageUrl = () => cy.url();
  getConfigureBreadcrumbsItem = () =>
    cy.get("li[aria-current='page'].jenkins-breadcrumbs__list-item");
  getInputDisplayName = () => cy.get("input.validated");
  getInputDescription = () => cy.get("textarea.jenkins-input");
  getSideMenu = () => cy.get("div.task");
  getBtnConfirmRenameFolder = () => cy.get('button[name="Submit"]');
  getNewNameField = () => cy.get('input[checkdependson="newName"]');

  clickSaveBtn() {
    this.getSaveBtn().click();

    return new FolderPage();
  }

  fillInputDisplayName(displayName) {
    this.getInputDisplayName().should("be.visible").type(displayName);

    return this;
  }

  fillInputDescription(description) {
    this.getInputDescription().should("be.visible").type(description);

    return this;
  }

  fillNewNameField(newName) {
    this.getNewNameField().clear().type(newName);
    return this;
  }
  clickBtnConfirmRenameFolder() {
    this.getBtnConfirmRenameFolder().click();
    return new FolderPage()
  }
  
}

export default FolderConfigurePage;
