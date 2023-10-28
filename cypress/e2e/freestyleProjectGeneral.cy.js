/// <reference types="cypress"/>

import freestyleProjectGeneral from "../fixtures/freestyleProjectGeneral.json"

describe('Freestyle Project > General', () => {

    it('TC_04.01.002 | Verify the user is able to see the "General" section', function() {

        cy.get('#side-panel a[href$=newJob]').click();
        cy.get('form input#name').type('FreestyleProject1');
        cy.get('#items li[class$=FreeStyleProject]').click();
        cy.get('button[type=submit]').click();

        cy.get('form h2#general').should('be.visible').and('have.text', freestyleProjectGeneral.sectionName);
        
    });
});