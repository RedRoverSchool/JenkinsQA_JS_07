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

    it('TC_04.01.003 | Verify the user is able to disable the project', function() {

        cy.get('#side-panel a[href$=newJob]').click();
        cy.get('form input#name').type('FreestyleProject1');
        cy.get('form #items li[class$=FreeStyleProject]').click();
        cy.get('form button[type=submit]').click();

        cy.get('form input[class*=toggle-switch]').should('be.enabled');
      
        cy.get('form label[class*=toggle-switch]').click().should('not.be.enabled');
        cy.get('form span[class*=unchecked-title]').should('have.text', freestyleProjectGeneral.statusDisabled).and('be.visible');
        
    });

    it('TC_04.01.004 | Verify the user is able to enable the project', function() {

        cy.get('#side-panel a[href$=newJob]').click();
        cy.get('form input#name').type('FreestyleProject1');
        cy.get('form #items li[class$=FreeStyleProject]').click();
        cy.get('form button[type=submit]').click();
        
        cy.get('form label[class*=toggle-switch]').click().should('not.be.enabled');
        
        cy.get('form label[class*=toggle-switch]').click();
        cy.get('form input[class*=toggle-switch]').should('be.enabled');
        cy.get('form span[class*=checked-title]').should('have.text', freestyleProjectGeneral.statusEnabled).and('be.visible');
        
    });       
});