import FolderPage from "./FolderPage";
import folderConfigureData from "../fixtures/pom_fixtures/folderConfigureData.json";
const HOST = Cypress.env("local.host");
const PORT = Cypress.env("local.port");

class FolderConfigurePage {
  getSaveBtn = () => cy.get('button[name="Submit"]');
  getFolderConfigurePageUrl = () => cy.url();
  getConfigureBreadcrumbsItem = () => cy.get("#breadcrumbs > li:nth-child(5)");
  getInputDisplayName = () => cy.get('input.validated');
  getInputDescription = () => cy.get('textarea.jenkins-input');

  clickSaveBtn() {
    this.getSaveBtn().click();

    return new FolderPage();
  }

  checkFolderConfigurePageUrl() {
    this.getFolderConfigurePageUrl().should(
      "equal",
      `http://${HOST}:${PORT}/job/${folderConfigureData.folderName}/configure`
    );

    return this;
  }

  fillInputDisplayName(displayName) {
    this.getInputDisplayName().should('be.visible').type(displayName);

    return this;
  }

  fillInputDescription(description) {
    this.getInputDescription().should('be.visible').type(description);

    return this;
  }
}

export default FolderConfigurePage;
