/// <reference types="cypress"/>

import pipelineProject from "../fixtures/pipelineProject.json";

describe("createPipelineProject7", () => {
  it("TC_03.04.007 | Create Pipeline project", () => {
    cy.get('a[href="/view/all/newJob"]').click();
    cy.get("#name").type(pipelineProject.pipelineName);
    cy.get(".label").contains("Pipeline").click();
    cy.get("#ok-button").click();

    cy.url().should("include", "/configure");
    cy.get("div h1").should(
      "have.text",
      pipelineProject.pipelineConfigurePageHeader
    );
  });
});
