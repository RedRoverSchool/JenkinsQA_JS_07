/// <reference types="cypress"/>

import freestyleProjectGeneral from "../fixtures/freestyleProjectGeneral.json"

describe('Freestyle Project > General', () => {

    beforeEach(function() {

        cy.get('#side-panel a[href$=newJob]').click();
        cy.get('form input#name').type('FreestyleProject1');
        cy.get('form #items li[class$=FreeStyleProject]').click();
        cy.get('form button[type=submit]').click();

    });

    it('TC_04.01.002 | Verify the user is able to see the "General" section', function() {

        cy.get('form h2#general').should('have.text', freestyleProjectGeneral.sectionName).and('be.visible');
        
    });

    it('TC_04.01.003 | Verify the user is able to disable the project', function() {

        cy.get('form input[class*=toggle-switch]').should('be.enabled');
      
        cy.get('form label[class*=toggle-switch]').click().should('not.be.enabled');
        cy.get('form span[class*=unchecked-title]').should('have.text', freestyleProjectGeneral.statusDisabled).and('be.visible');
        
    });

    it('TC_04.01.004 | Verify the user is able to enable the project', function() {
        
        cy.get('form label[class*=toggle-switch]').click().should('not.be.enabled');
        
        cy.get('form label[class*=toggle-switch]').click();
        cy.get('form input[class*=toggle-switch]').should('be.enabled');
        cy.get('form span[class*=checked-title]').should('have.text', freestyleProjectGeneral.statusEnabled).and('be.visible');
        
    });

    it('TC_04.01.005 | Verify the user is able to enter a description in the text box', function() {

        cy.get('form [name=description]').type(freestyleProjectGeneral.description).should('have.value', freestyleProjectGeneral.description);

    });

    it('TC_04.01.006 | Verify the user is able to see all options with check boxes', function() {

        cy.get('[nameref=rowSetStart30] div.help-sibling div label').each(($el, i) => {
            cy.wrap($el).should('have.text', freestyleProjectGeneral.checkBoxOptions[i]).and('be.visible');
        });
        cy.get('.config-table > :nth-child(6) label').should('have.text', freestyleProjectGeneral.checkBoxOption).and('be.visible');

    });

    it('TC_04.01.007 | Verify the user is able to check all the check boxes', function() {

        cy.get('[nameref=rowSetStart30] div.help-sibling div input[type=checkbox]').check({ force: true }).should('be.checked');
        cy.get('.config-table > :nth-child(6) input[type=checkbox]').check({ force: true }).should('be.checked');

    });

    it('TC_04.01.008 | Verify the user is able to uncheck all the check boxes', function() {

        cy.get('[nameref=rowSetStart30] div.help-sibling div input[type=checkbox]').check({ force: true }).should('be.checked');
        cy.get('.config-table > :nth-child(6) input[type=checkbox]').check({ force: true }).should('be.checked');

        cy.get('[nameref=rowSetStart30] div.help-sibling div input[type=checkbox]').uncheck({ force: true }).should('not.be.checked');
        cy.get('.config-table > :nth-child(6) input[type=checkbox]').uncheck({ force: true }).should('not.be.checked');

    });

    it('TC_04.01.009 | Verify the user is able to extend more options by clicking on the “Advanced” button', function() {

        cy.get('form :nth-child(7) button.advancedButton').click();

        cy.get('form > div > :nth-child(8)').should('have.attr', 'style', 'display: block;').and('be.visible');

    });
});