/// <reference types="cypress"/>

import HomePage from "../../pageObjects/HomePage";
import newJobPageData from "../../fixtures/pom_fixtures/newJobPageData.json";

describe("labelsAtNewJobPage", () => {
  const homePage = new HomePage();

  beforeEach(function () {
    homePage.clickNewItemLink() 
            .collectTypeOfProjectLabels(); 
  });
  newJobPageData.typeOfProjectLabelNames.forEach((name, index) => {
    it(`TC_03.01.11 | + New Item > Verify label name ${name} on /newJob page`, function () {
     
      cy.url().should("contain", newJobPageData.url);
      cy.wrap(this.labelName[index]).contains(name);
    });
  });
});
