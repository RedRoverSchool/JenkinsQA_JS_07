/// <reference types="cypress"/>

import createFreestyleProject from "../fixtures/createFreestyleProject.json";

describe("createFreestyleProject1", () => {
  it("TC_03.02.007 | Verify that the Freestyle project created", () => {
    cy.get('a[href="/view/all/newJob"]').click();
    cy.get("#name.jenkins-input").type(createFreestyleProject.newProjectName);
    cy.get(".icon-freestyle-project").click();
    cy.get('button[type="submit"]').click();
    cy.get('button[name="Submit"]').click();
    cy.get(".jenkins-breadcrumbs__list-item:first-child").click();

    cy.get(".jenkins-table__link").should("have.text", createFreestyleProject.newProjectName);
  });
});
