/// <reference types="cypress"/>

import { arrow,link } from "../fixtures/svgPaths.json";
import {linkDb } from "../fixtures/linkDistributedBuilds.json";

describe('check_ARROW_Dd_Set_up_a_distributed_build.cy', () => {
  beforeEach(function () {
    cy.get('.empty-state-section h2').then(($els) =>{
      const namesOfSections = Cypress.$.makeArray($els).map(($el)=>$el.innerText)
      expect(namesOfSections).includes('Set up a distributed build')
  })
   
});

    it('TC_02.08.005>Dd>“Set up a distributed build”>Near "Set up an agent" is an arrow ', () => {
       
        cy.get('a[href="computer/new"]').contains('Set up an agent').should('be.visible')
        cy.get('a[href="computer/new"] svg').should('be.visible')
        cy.get('a[href="computer/new"] path')
          .should('have.attr', 'd', arrow.d)
    });

   
});

   