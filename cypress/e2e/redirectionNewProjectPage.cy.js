/// <reference types="cypress"/>

import newJobPage from "../fixtures/newJobPage.json"
import newItem from "../fixtures/newItem.json"

describe('redirectionNewProjectPage', () => {
    it('TC_03.08.007 +New Item > Copy from > Redirect to the new project page', () => {
        cy.visit('http://localhost:8080/view/all/newJob');
        cy.get('input#name').type('NewProject');
        cy.get('.hudson_model_FreeStyleProject').click();
        cy.get('#ok-button').click();
        cy.url().should('be.equal', 'http://localhost:8080/job/NewProject/configure')
    });
});
