/// <reference types="cypress"/>

import newItemFreestyleProject from "../fixtures/newItemFreestyleProject.json"

describe('New Item > Create Freestyle Project', () => {

    beforeEach(function() {

        cy.get('#side-panel a[href$=newJob]').click();

    });

    it('TC_03.02.003 | Verify the user is able to see an empty field warning after pointing a cursor out of the Item Name input field', () => {

        cy.get('form div#itemname-required').as('emptyFieldWarning').should('have.class', 'input-message-disabled').and('not.be.visible');
        cy.get('form label.h3').click();

        cy.get('@emptyFieldWarning').should('not.have.class', 'input-message-disabled').and('have.text', newItemFreestyleProject.emptyFieldWarning).and('be.visible');

    });

    it('TC_03.02.004 | Verify the user is able to see an empty field warning after choosing the "Freestyle Project" from the option list', () => {

        cy.get('form div#itemname-required').as('emptyFieldWarning').should('have.class', 'input-message-disabled').and('not.be.visible');
        cy.get('form li[class$=FreeStyleProject]').click();

        cy.get('@emptyFieldWarning').should('not.have.class', 'input-message-disabled').and('have.text', newItemFreestyleProject.emptyFieldWarning).and('be.visible');

    });

    it('TC_03.02.005 | Verify the user is able to choose the "Freestyle Project" from the options list', () => {

        cy.get('form li[class*=FreeStyleProject]').as('freestyleProjectOption').click();

        cy.get('@freestyleProjectOption').should('have.class', 'active').and('have.attr', 'aria-checked', 'true');

    });

    it('TC_03.02.006 | Verify the user is redirected to "Configuration" page after clicking "OK" button', () => {

        cy.get('form input[name=name]').type(newItemFreestyleProject.itemName);
        cy.get('form li[class*=FreeStyleProject]').click();
        cy.get('form button[type=submit]').click();

        cy.get('#page-body h1').should('have.text', newItemFreestyleProject.configPageName).and('be.visible');
        cy.url().should('be.eql', newItemFreestyleProject.configPageURL);

    });
});