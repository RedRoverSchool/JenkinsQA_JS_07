/// <reference types="cypress"/
import footerJenkinsData from "../fixtures/footerJenkinsData.json";

describe("verifyFooterVersionMenu.cy", () => {
  it("TC_15.03.004 | | Footer -> Jenkins's pop-up menu > Verify Get involved link", () => {
    cy.get("button.jenkins_ver").click();
    cy.get(".tippy-box .jenkins-dropdown__item:nth-of-type(2)")
      .invoke("removeAttr", "target")
      .click();
    cy.url().should("be.equal", footerJenkinsData.participatePage);
    cy.get("h1")
      .should("be.visible")
      .then(($el) => {
        const elText = $el.text().replace(/\n/g, "");
        expect(elText).to.deep.equal(footerJenkinsData.participatePageHeader);
      });
  });
});
