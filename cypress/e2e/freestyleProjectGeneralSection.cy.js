/// <reference types="cypress"/>

import freestyleProject from "../fixtures/freestyleProject.json"

describe ('Freestyle Project', () => {

    it('TC_04.01.011 | Freestyle project > Verify that General section is displayed on Configuration page', function(){

        cy.get('a[href= "/view/all/newJob"]').click();
        cy.get('input#name').type(freestyleProject.freestyleProjectName);
        cy.get('.hudson_model_FreeStyleProject').click();
        cy.get('#ok-button').click();

        cy.get('[data-section-id="general"]').should('exist');
    })
})