/// <reference types="cypress"/>

describe("TC_02.03.007 | Dashboard > Welcome message", () => {
  it("Verify the URL", () => {
    cy.url().should("be.equal", "http://localhost:8080/");
  });

  it("Verify h1 contains welcome message", () => {
    cy.get("div h1").contains("Welcome to Jenkins!").should("be.visible");
  });

  it("Verify the title under h1 contains explaining message", () => {
    cy.get("div h1")
      .next("p")
      .contains(
        "This page is where your Jenkins jobs will be displayed. To get started, you can set up distributed builds or start building a software project."
      )
      .should("be.visible");
  });
});
