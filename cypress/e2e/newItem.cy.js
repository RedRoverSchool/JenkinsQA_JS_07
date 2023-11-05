/// <reference types="cypress"/>

import newJobPage from "../fixtures/newJobPage.json"
import newItem from '../fixtures/newItem.json'

describe('newItem', () => {

    it('TC_03.01.001 | + New Item > Verify that user after click on +New Item option is redirected to the "New job" page', function () {

        cy.get('[href*="/view/all/newJob"]').click();

        cy.url().should('include', newJobPage.url);
        cy.get('.add-item-name .h3').should('have.text', newJobPage.fieldName);
    });

    it('TC_03.01.002| + New Item> Verify that the following types of projects: “Freestyle project”, “Pipeline”, “Multi-configuration project”, “Folder”, “Multibranch Pipeline”, “Organization Folder “ are displayed', () => {

        cy.get('[href*="/view/all/newJob"]').click();

        cy.get('.label').each(($element, index) => {
            cy.wrap($element).should('have.text', newJobPage.expectedProjectLabels[index]).and('be.visible');
        });
    });

    it('TC_03.01.003| + New Item> Verify that the OK button is disabled when the “Enter an item name” field is empty', () => {

        cy.get('[href*="/view/all/newJob"]').click();
        cy.get('#name').should('have.value', newJobPage.itemNameFieldValue);

        cy.get('#ok-button').should('have.class', 'disabled');
    });

    it('TC_03.01.005| + New Item> Verify +New Item titles are displayed', () => {
        cy.get('[href*="/view/all/newJob"]').click();
        cy.url().should('eql', newItem.newItemPage);
        cy.get('.add-item-name label').should('have.text', newJobPage.fieldName);
        cy.get('span.label').each(($el, i) => {
            cy.wrap($el).should('have.text',newJobPage.expectedProjectLabels[i]);
        });

    });
});
