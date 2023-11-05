/// <reference types="cypress"/>

import { namesData } from "../fixtures/commandPanel.json";

describe("Check left side bar", () => {
  it("TC_02.04.018 | Dashboard > Verify Command panel on the left side", () => {
    cy.get("#tasks").then(($element) => {
      const elementText = $element.text().replace(/\n/g, '').trim().split(/\s{2,}/);
      expect(elementText).to.deep.equal(namesData);

    });
  });
});