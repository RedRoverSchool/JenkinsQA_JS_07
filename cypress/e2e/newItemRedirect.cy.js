/// <reference types="cypress"/>

import newJobPage from "../fixtures/newJobPage.json"

describe('newItem', () => {

    it('TC_03.01.004 | Item > Verify that clicking "+ New Item" redirects the user to the "New Job" page', function () {
        
        cy.get('a[href*="/view/all/newJob"]').click();

        cy.get('label[for="name"]').should('have.text', newJobPage.fieldName);
    });

    it.skip('TC_03.01.010 | + New Item > Verify that the following types of projects: “Freestyle project”, “Pipeline”, “Multi-configuration project”, “Folder”, “Multibranch Pipeline”, “Organization Folder “ are displayed.', () => {
        
        cy.get('a[href*="/view/all/newJob"]').click();
        
        cy.get('.label').each(($element, index) => {
            cy.wrap($element).should('have.text', newJobPage.expectedProjectLabels[index]).and('be.visible');
        });
    });
});