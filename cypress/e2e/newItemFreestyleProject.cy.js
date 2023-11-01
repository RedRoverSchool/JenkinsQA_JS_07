/// <reference types="cypress"/>

import newItemFreestyleProject from "../fixtures/newItemFreestyleProject.json"

describe('New Item > Create Freestyle Project', () => {

    beforeEach(function() {

        cy.get('#side-panel a[href$=newJob]').click();

    });

    it('TC_03.02.003 | Verify the user is able to see a red tip after pointing a cursor out of the Item Name input field', () => {

        cy.get('form div#itemname-required').as('emptyFieldErrorMessage').should('have.class', 'input-message-disabled').and('not.be.visible');
        cy.get('form label.h3').click();

        cy.get('@emptyFieldErrorMessage').should('not.have.class', 'input-message-disabled').and('have.text', newItemFreestyleProject.emptyFieldErrorMessage).and('be.visible');

    });
});