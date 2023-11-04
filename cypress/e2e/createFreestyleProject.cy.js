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

    it('TC_03.03.002 | Verify that Description field is presented', function () {

        cy.get('[href*="/view/all/newJob"]').click();
        cy.get('#name').type(createFreestyleProject.newProjectName);
        cy.get('[class*=FreeStyleProject]').click();
        cy.get('#ok-button').click();

        cy.get('textarea[name="description"]').should('exist').and('be.visible');
    });

    it('TC_03.03.004 | Verify that Freestyle Project is created and verify elements on /configure page', function () {
        cy.get('[href*="/view/all/newJob"]').click();
        cy.get('input#name').type('project' + Date.now());
        cy.get('li.hudson_model_FreeStyleProject').click();
    });

});
