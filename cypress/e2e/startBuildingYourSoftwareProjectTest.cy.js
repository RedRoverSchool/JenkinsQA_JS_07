/// <reference types="cypress"/>

const PORT = Cypress.env("local.port");
const HOST = Cypress.env('local.host');
import { expectedProjectLabels } from "../fixtures/newJobPage.json";
import name from '../fixtures/newJobPage.json'
describe("startBuildingYourSoftwareProjectTest", () => {
  it('TC_02.06.001 |Block “Start building your software project” > Verify "Start building your software project” is displayed', () => {
    cy.get('div.empty-state-block > :nth-child(3) h2').should("be.visible")
        .and("have.text", "Start building your software project");
  });

  it('TC_02.06.003 | Block "Start building your software project" > Option “Create a job” leads to the page “New Job”', () => {
    cy.get('a[href="newJob"]').click();
    cy.url().should("include", "/newJob");
    cy.get(".h3").should("be.visible").and("have.text", "Enter an item name");
  });
  it('TC_02.06.004 |Block “Start building your software project” >Check redirect to the page "New Job"', ()=>{

    cy.get('a[href="newJob"]').click();
    cy.url().should('be.eql',`http://${HOST}:${PORT}/newJob`);
    cy.get('.h3').should('be.visible').and('have.text',name.fieldName) 
    });

  it('TC_02.06.006 | Block "Start building your software project" > "Arrow" icon is visible and clickable', () => {
    cy.get('a[href="newJob"] svg').should("be.visible");
    cy.get('a[href="newJob"] svg').click();
    cy.url().should("include", "/newJob");
    cy.get(".label").then(($els) => {
      const ProjectLabels = Cypress._.map(
        Cypress.$.makeArray($els),
        "textContent"
      );
      expect(ProjectLabels).to.be.deep.equal(expectedProjectLabels);
    });
  });
});
