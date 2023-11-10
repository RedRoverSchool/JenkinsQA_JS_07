/// <reference types="cypress"/>

import { arrow,link } from "../fixtures/svgPaths.json";
import {linkDb } from "../fixtures/linkDistributedBuilds.json";

describe('ceck_ARROW_Dd_Set_up_a_distributed_build.cy', () => {
    it('TC_02.08.005>Dd>“Set up a distributed build”>Near each of the options is a sign ', () => {
        cy.get('.empty-state-section h2').then(($els) =>{
            const namesOfSections = Cypress.$.makeArray($els).map(($el)=>$el.innerText)
            expect(namesOfSections).includes('Set up a distributed build')
        }) 

        cy.get('a[href="computer/new"]').contains('Set up an agent').should('be.visible')
        cy.get('a[href="computer/new"] svg').should('be.visible')
        cy.get('a[href="computer/new"] path')
          .should('have.attr', 'd', arrow.d)
 
        cy.get('a[href="cloud/"]').contains('Configure a cloud').should('be.visible')
        cy.get('a[href="cloud/"] svg').should('be.visible')
        cy.get('a[href="cloud/"] path')
          .should('have.attr', 'd', arrow.d)
           
        cy.get(`a[href="${linkDb}"]`).contains('Learn more about distributed builds')
          .should('be.visible')
        cy.get(`a[href="${linkDb}"] svg`).should('be.visible')
        cy.get(`a[href="${linkDb}"] path`)
          .should('have.attr', 'd', link.d) 
    });
});

   