/// <reference types="cypress"/>

import createFreestyleProject from "../fixtures/createFreestyleProject.json"
import configureFreestyleProject from "../fixtures/configureFreestyleProject.json"

describe('createFreestyleProject', () => {

    it('TC_03.03.001 | Verify that General page is displayed', function () {

        cy.get('[href*="/view/all/newJob"]').click();
        cy.get('#name').type(createFreestyleProject.newProjectName);
        cy.get('[class*=FreeStyleProject]').click();
        cy.get('#ok-button').click();

        cy.get('#general').should('have.text', configureFreestyleProject.pageTitle).and('be.visible');
    });
});
