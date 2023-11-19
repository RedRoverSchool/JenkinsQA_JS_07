/// <reference types="cypress" />
import footerJenkinsData from "../fixtures/footerJenkinsData.json";

describe("Footer > Jenkins pop-up menu", () => {
  it('TC_15.03.002| Footer>Jenkins pop-up menu> option"Website" redirection', () => {
    cy.get("button.jenkins_ver").click();
    cy.get('a.jenkins-dropdown__item[href = "https://www.jenkins.io/"]')
      .invoke("removeAttr", "target")
      .click();

    cy.origin("https://www.jenkins.io/", () => {
      cy.get("h1.page-title span").invoke("text");
    }).should("include", footerJenkinsData.websiteTitle);
  });
});
