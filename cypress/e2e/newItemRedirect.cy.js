/// <reference types="cypress"/>

import newJobPage from "../fixtures/newJobPage.json"

describe('newItemRedirect', () => {

    it('TC_03.01.004 | Item > Verify that clicking "+ New Item" redirects the user to the "New Job" page', function () {
        
        cy.get('a[href*="/view/all/newJob"]').click();

        cy.get('label[for="name"]').should('have.text', newJobPage.fieldName);
    });
});