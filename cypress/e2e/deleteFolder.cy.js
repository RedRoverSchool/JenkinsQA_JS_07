/// <reference types="cypress" />

const PORT = Cypress.env("local.port");

import typeName from "../fixtures/createFolder.json";
import welcomeMessage from "../fixtures/dashboardWelcomedMessage.json";

describe("deleteFolder", () => {
  beforeEach("createNewFolder", () => {
    cy.get('a[href="newJob"]').click();
    cy.get("#name").type(typeName.testfolderName);
    cy.get(".com_cloudbees_hudson_plugins_folder_Folder").click();
    cy.get("#ok-button").click();
    cy.get('button[name="Submit"]').click();
  });

  it("TC_07.05.002 | Folder > Delete Folder > Verify Folder Deletion Functionality", () => {
    cy.get('a[href="/job/TestFolder/delete"]').click();
    cy.get('button[name="Submit"]').click();
    cy.url().should("equal", `http://localhost:${PORT}/`);
    cy.get(".empty-state-block > h1").should(
      "have.text",
      welcomeMessage.pageTitle
    );
    cy.get("#projectstatus").should("not.exist");
  });
});
