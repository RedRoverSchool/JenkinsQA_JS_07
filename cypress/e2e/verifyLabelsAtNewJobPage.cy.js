/// <reference types="cypress"/>
import labels from "../fixtures/labelsAtnewJobPage.json";

describe.skip("verifyLabelsAtNewJobPage", () => {
  beforeEach(function () {
    cy.get('a[href="/view/all/newJob"]').click();
    cy.get(".label").as("labelName");
  });
  
  labels.labelName.forEach((name, index) => {
    it(`TC_03.01.11 | + New Item > Verify label name ${name} on /newJob page`, function () {
      cy.url().should("contain", labels.url);
      cy.wrap(this.labelName[index]).contains(name);
    });
  });
});
