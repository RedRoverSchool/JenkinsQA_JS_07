/// <reference types="cypress" />
import footerJenkinsData from "../fixtures/footerJenkinsData.json";

describe("Footer-Jenkins Version", () => {
  it("TC_15.03.001 | Verify Jenkins version in Footer and color", () => {
    cy.get(".jenkins_ver")

      .should("be.visible")
      .and("contain", footerJenkinsData.jenkinsVersion)
      .and("have.css", "color", "rgb(20, 20, 31)");
  });
});
