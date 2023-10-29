/// <reference types="cypress"/>

import newJobPage from "../fixtures/newJobPage.json"


describe('newItem', () => {

    it('TC_03.01.001 | + New Item > Verify that user after click on +New Item option is redirected to the "New job" page', function () {

        cy.get('[href*="/view/all/newJob"]').click()

        cy.url().should('include', 'view/all/newJob')
        cy.get('.add-item-name .h3').should('have.text', newJobPage.newJobPageFieldName)
    })

    it('TC_03.01.002| + New Item> Verify that the following types of projects: “Freestyle project”, “Pipeline”, “Multi-configuration project”, “Folder”, “Multibranch Pipeline”, “Organization Folder “ are displayed', () => {

        cy.get('[href*="/view/all/newJob"]').click()

        cy.get('.label').each(($element, index) => {
            cy.wrap($element).should('have.text', newJobPage.expectedProjectLabels[index]).and('be.visible');
        });
    });

});
