/// <reference types="cypress"/>

import data from "../fixtures/freestyleProjectConfiguration.json"

describe('TC_04.02.001 | Freestyle > Source Code Management section', () => {
    beforeEach(() => {
        cy.get('a[href="/view/all/newJob"]').click();
        cy.get('input#name').type(data.projectName);
        cy.get('.hudson_model_FreeStyleProject').click();
        cy.get('#ok-button').click();
        cy.get('[data-section-id=source-code-management]').click();
    });

    it('TC_04.02.001 | Freestyle > Source Code Management > Source Code Management section is displayed', () => {
        cy.get('#source-code-management').should('be.visible').and('contain', data.sectionName);
    });
});