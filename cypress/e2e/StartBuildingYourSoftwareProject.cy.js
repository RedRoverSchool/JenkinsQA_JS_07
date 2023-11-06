/// <reference types="cypress"/>

describe("StartBuildingYourSoftwareProjectTest", () => {
  it('TC_02.06.005 |Block “Start building your software project” > Verify "Start building your software project” is displayed', () => {
    cy.get('h2.h4').should('be.visible');
  });
});