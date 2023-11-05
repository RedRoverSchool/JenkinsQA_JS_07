/// <reference types="cypress"/>

import data from "../fixtures/folderPage.json"

describe('Folder page', () => {
    beforeEach(() => {
        cy.get('a[href="/view/all/newJob"]').click();
        cy.get('input#name').type(data.folderName);
        cy.get('.com_cloudbees_hudson_plugins_folder_Folder').click();
        cy.get('#ok-button').click();
        cy.get('button[name="Submit"]').click();
    });

    it('TC_07.01.001 | Folder page > Verify a folder link', () => {
        cy.url().should('be.equal', `http://localhost:8080/job/${data.folderName}/`)
    });

    it('TC_07.01.002 | Folder page > Verify left-side menu', () => {
        cy.get('#tasks .task').each(($el, ind) => {
            expect($el.text().trim()).to.be.equal(data.menuItems[ind]);
        })
    });

    it('TC_07.01.003 | Folder page > Check the default active menu item', () => {
        cy.get('#tasks .task .task-link:first-child')
            .should('contain', 'Status')
            .and('have.class', 'task-link--active');
    });
});