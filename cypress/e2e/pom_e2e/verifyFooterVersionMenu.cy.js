/// <reference types="cypress"/
import HomePage from "../../pageObjects/HomePage";
import footerJenkinsData from "../../fixtures/pom_fixtures/footerJenkinsData.json";

describe("verifyFooterVersionMenu", () => {
  const homepage = new HomePage();

  it("TC_15.03.004 | Footer -> Jenkins's pop-up menu > Verify Get involved link", () => {
    homepage
      .clickJenkinsVersionBtn()
      .clickGetInvolvedLink()
      .checkParticipatePageUrl()
      .getParticipatePageHeader()
      .should("be.visible")
      .then(($el) => {
        const elText = $el.text().replace(/\n/g, "");
        expect(elText).to.deep.equal(footerJenkinsData.participatePageHeader);
      });
  });
});
