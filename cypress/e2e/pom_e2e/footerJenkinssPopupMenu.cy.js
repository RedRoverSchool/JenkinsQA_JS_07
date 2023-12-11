/// <reference types="cypress" />
import HomePage from "../../pageObjects/HomePage";
import footerJenkinsData from "../../fixtures/pom_fixtures/footerJenkinsData.json";


describe("Footer > Jenkins's pop-up menu", () => { 
    const homePage = new HomePage();

  it("TC_15.03.005 | Footer > Verify pop-up menu “Jenkins <version nr>”", () => {
    homePage.clickJenkinsVersionBtn()
            .getPopUpMenuJenkinsVersion()
            .should('be.visible')     
            .then(($el) => {
              const elText = $el.text().replace(/\n/g, '').trim().replace(/ {2,}/g, '_').split('_');        
              expect(elText).to.deep.equal(footerJenkinsData.popUpMenu);
            });          
    });
   
  it("TC_15.03.001 | Footer> Verify Jenkins version in Footer and color", () => {
    homePage
      .getJenkinsVersionBtn()
      .should("be.visible")
      .and("contain", footerJenkinsData.jenkinsVersion)
      .and("have.css", "color", footerJenkinsData.buttonJenkinsVersionColor);
  });  
});