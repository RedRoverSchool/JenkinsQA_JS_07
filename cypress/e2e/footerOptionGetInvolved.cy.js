/// <reference types="cypress" />
import footerJenkinsData from "../fixtures/footerJenkinsData.json";

describe("Footer-Option 'Get Involved'", () => {
  it('TC_15.03.003 |Verify dropdown option "Get involved" navigation to a new page', () => {
    cy.get(".page-footer__links button.jenkins-button").click();
    cy.get(
      'a.jenkins-dropdown__item[href="https://www.jenkins.io/participate/"]'
    )
      .invoke("removeAttr", "target")
      .click();

    let sent = { title: footerJenkinsData.participatePageHeader };
    cy.origin(
      "https://www.jenkins.io/participate/",
      { args: sent },
      ({ title }) => {
        cy.get("div.col-md-12 h1").invoke("text").should("include", title);
      }
    );
  });
});
