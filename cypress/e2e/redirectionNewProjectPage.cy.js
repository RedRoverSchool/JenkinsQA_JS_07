/// <reference types="cypress"/>

describe('redirectionNewProjectPage', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8080/view/all/newJob')
    });
    it('TC_03.08.007 +New Item > Copy from > Redirect to the new project page', () => {
        cy.get('input#name').type('NewProject');
        cy.get('.com_cloudbees_hudson_plugins_folder_Folder').click();
        cy.get('#ok-button').click();
        cy.url().should('be.equal', 'http://localhost:8080/job/NewProject/configure')
    });
});
