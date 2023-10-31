/// <reference types="cypress"/>

describe("checkWelcomeMessage", () => {
  it("Dashboard > Welcome message", () => {
    cy.url().should("be.equal", "http://localhost:8080/");
    cy.get("div h1").contains("Welcome to Jenkins!").should("be.visible");
    cy.get("div h1")
      .next("p")
      .contains(
        "This page is where your Jenkins jobs will be displayed. To get started, you can set up distributed builds or start building a software project."
      )
      .should("be.visible");
  });
});
