import FolderPage from "./FolderPage";

class FolderConfigurePage {
  getSaveBtn = () => cy.get('button[name="Submit"]');
  getFolderConfigurePageUrl = () => cy.url();
  getConfigureBreadcrumbsItem = () =>
    cy.get("li[aria-current='page'].jenkins-breadcrumbs__list-item");
  getInputDisplayName = () => cy.get("input.validated");
  getInputDescription = () => cy.get("textarea.jenkins-input");
  getSideMenu = () => cy.get("div.task");
  getSidePanelLinks = () => cy.get('div.task>.task-link-wrapper>.task-link');
  getGeneralLink = () => cy.get('button[data-section-id= "general"')
  getBtnConfirmRenameFolder = () => cy.get('button[name="Submit"]');
  getNewNameField = () => cy.get('input[checkdependson="newName"]');
  getApplyBtn = () => cy.get(".jenkins-button.apply-button");
  getNotificationBar = () => cy.get("#notification-bar");
  getErrorMessage = () => cy.get('a#skip2content+h1');
  getErrorMessageText = () => cy.get('h1+p');;
  getHealthMetricsBtn = () => cy.get('button.advancedButton');
  getPropertiesAddBtn = () => cy.get('button[class="jenkins-button repeatable-add"]');
  getAddMetricBtn = () => cy.get("#yui-gen1-button");
  getPipelineLibrariesText = () => cy.get("section > section > div.jenkins-section__title");


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

    return new FolderPage();
  }

  clickApplyBtn() {
    this.getApplyBtn().click();

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

  createFolderConfigurePageUrl(
    baseUrl,
    jobJenkinsPageEndpoint,
    folderName,
    folderConfigurePageEndpoint
  ) {
    return `${baseUrl}/${jobJenkinsPageEndpoint}/${folderName}/${folderConfigurePageEndpoint}`;
  }

  replaceAndTrimPipelineLibrariesText() {
    return this.getPipelineLibrariesText()
      .should("be.visible")
      .then(($element) => {
        return $element.text().replace(/\n/g, "").trim();
      })
  }
}

export default FolderConfigurePage;
