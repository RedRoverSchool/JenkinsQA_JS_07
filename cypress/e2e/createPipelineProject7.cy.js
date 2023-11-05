/// <reference types="cypress"/>

describe("createPipelineProject7", () => {
  it("TC_03.04.007 | Create Pipeline project", () => {
    cy.get('a[href="/view/all/newJob"]').click();
    cy.get("#name").type("Project7");
    cy.get(".label").contains("Pipeline").click();
    cy.get("#ok-button").click();
    cy.url().should("eq", "http://localhost:8080/job/Project7/configure");
  });
});
