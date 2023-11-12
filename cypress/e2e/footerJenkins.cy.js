/// <reference types="cypress" />
import footerJenkinsData from "../fixtures/footerJenkinsData.json";

describe("Footer-Jenkins Version and Options", () => {
  it("US_15.03.001 | Verify Jenkins version in Footer and color", () => {
    cy.get(".jenkins_ver")

      .should("be.visible")
      .and("have.text", footerJenkinsData.jenkinsVersion)
      .and("have.css", "color", "rgb(20, 20, 31)");
  });

  it('US_15.03.002|Verify dropdown option "Website" navigation to a new page', () => {
    cy.get("button.jenkins_ver").click();
    cy.get('a.jenkins-dropdown__item[href = "https://www.jenkins.io/"]')
      .invoke("removeAttr", "target")
      .click();

    cy.origin("https://www.jenkins.io/", () => {
      cy.get("h1.page-title span").invoke("text");
    }).should("include", footerJenkinsData.websiteTitle);
  });

  it('US_15.03.003 |Verify dropdown option "Get involved" navigation to a new page', () => {
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
