/// <reference types="cypress"/>

describe("checkWelcomeText", () => {
  it("TC_02.03.018 | Dashboard > Verify the text of description of how user can start to work in Jenkins", () => {
    const text = "This page is where your Jenkins jobs will be displayed. To get started, you can set up distributed builds or start building a software project."
    cy.get("div p").should('be.visible').and("have.text", text)
  })
})
