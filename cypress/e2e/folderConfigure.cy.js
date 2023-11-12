/// <reference types="cypress" />

const HOST = Cypress.env("local.host");
const PORT = Cypress.env("local.port");

import folderName from "../fixtures/createFolder.json";
import sideMenu from "../fixtures/folderConfigure.json";

describe("folderConfigure", () => {
  beforeEach("createNewFolder", () => {
    cy.get("#tasks .task").contains(sideMenu.sidePanelHomePage).click();
    cy.get("#name").type(folderName.testfolderName);
    cy.get(".com_cloudbees_hudson_plugins_folder_Folder").click();
    cy.get("#ok-button").click();
    cy.get('button[name="Submit"]').click();
  });

  it("TC_07.03.001 | Folder > Configure > Verify link “Configure” on the folder page", () => {
    cy.get("#tasks .task").contains(sideMenu.sidePanelFolderPage).click();
    cy.url().should(
      "equal",
      `http://${HOST}:${PORT}/job/${folderName.testfolderName}/configure`
    );
    cy.get(".jenkins-breadcrumbs__list-item")
      .contains(sideMenu.breadcrumbsConfigurationPage)
      .should("be.visible")
      .and("have.text", sideMenu.breadcrumbsConfigurationPage);
  });
});
