/// <reference types="cypress"/>

import createFreestyleProject2 from "../fixtures/createFreestyleProject2.json"

describe("createFreestyleProject2", () => {
  it("TC_03.03.005 | Create Freestyle Project > Verify that user sees the description field", () => {
    cy.get('a[href="/view/all/newJob"]').click()
    cy.get("#name").type(createFreestyleProject2.projectName)
    cy.get("span.label").contains("Freestyle project").click()
    cy.get("#ok-button").click()

    cy.get('div[class="jenkins-form-item tr "]')
      .contains("Description")
      .should("be.visible")
    cy.get('textarea[name="description"]').should("be.visible")
  })
})
