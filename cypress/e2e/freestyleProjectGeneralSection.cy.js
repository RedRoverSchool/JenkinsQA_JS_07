/// <reference types="cypress"/>

import freestyleProject from "../fixtures/freestyleProjectGeneralSection.json" 

describe ('Freestyle Project', () => {

    beforeEach('Create freestyle project', () => {

        cy.get('a[href= "/view/all/newJob"]').click();
        cy.get('input#name').type(freestyleProject.freestyleProjectName);
        cy.get('.hudson_model_FreeStyleProject').click();
        cy.get('#ok-button').click()

    })

    it('TC_04.01.011 | Freestyle project > Verify that General section is displayed on Configuration page', function(){

        cy.get('[data-section-id="general"]').should('have.class', 'task-link--active')
        cy.get('#general').should('be.visible');
    })

    it('TC_04.01.012 | Freestyle project > Verify that user is able to disable the project', function(){

        cy.get('.jenkins-toggle-switch__label__checked-title').should('have.text', freestyleProject.statusEnabled).and('be.visible');
        cy.get('#toggle-switch-enable-disable-project').click();

        cy.get('.jenkins-toggle-switch__label__unchecked-title').should('have.text', freestyleProject.statusDisabled).and('be.visible')
})

})