/// <reference types="cypress"/>

import { arrow, link } from "../fixtures/svgPaths.json";
import { linkDb } from "../fixtures/linkDistributedBuilds.json";

describe("check_ARROW_Dd_Set_up_a_distributed_build.cy", () => {
  beforeEach(function () {
    cy.get(".empty-state-section h2").then(($els) => {
      const namesOfSections = Cypress.$.makeArray($els).map(
        ($el) => $el.innerText
      );
      expect(namesOfSections).includes("Set up a distributed build");
    });
  });

  it('TC_02.08.005>Dd>“Set up a distributed build”>Near "Set up an agent" is an arrow ', () => {
    cy.get('a[href="computer/new"]')
      .contains("Set up an agent")
      .should("be.visible");
    cy.get('a[href="computer/new"] svg').should("be.visible");
    cy.get('a[href="computer/new"] path').should("have.attr", "d", arrow.d);
  });

  it('TC_02.08.006>Dd>“Set up a distributed build”>Near "Configure a cloud" is an arrow ', () => {
    cy.get('a[href="cloud/"]')
      .contains("Configure a cloud")
      .should("be.visible");
    cy.get('a[href="cloud/"] svg').should("be.visible");
    cy.get('a[href="cloud/"] path').should("have.attr", "d", arrow.d);
  });

  it('TC_02.08.007>Dd>“Set up a distributed build”>Near "Learn more about distributed builds" is a "link"-icon', () => {
    cy.get(`a[href="${linkDb}"]`)
      .contains("Learn more about distributed builds")
      .should("be.visible");
    cy.get(`a[href="${linkDb}"] svg`).should("be.visible");
    cy.get(`a[href="${linkDb}"] path`).should("have.attr", "d", link.d);
  });
});
