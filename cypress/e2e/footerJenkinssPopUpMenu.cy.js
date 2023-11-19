/// <reference types="cypress" />
import footerJenkinsData from "../fixtures/footerJenkinsData.json";

describe("Footer > Jenkins's pop-up menu", () => { 
  it("TC_15.03.005 | Footer > Verify pop-up menu “Jenkins <version nr>”", () => {
    cy.get('button.jenkins-button--tertiary.jenkins_ver')
      .click();
    cy.get('.tippy-content')
      .should('be.visible')     
      .then(($el) => {
        const elText = $el.text().replace(/\n/g, '').trim().replace(/ {2,}/g, '_').split('_');        
        expect(elText).to.deep.equal(footerJenkinsData.popUpMenu);
      });          
    });
});
