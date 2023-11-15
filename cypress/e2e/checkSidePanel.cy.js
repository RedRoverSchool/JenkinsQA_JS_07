/// <reference types="cypress" />

import folderName from "../fixtures/createFolder.json";

const PORT = Cypress.env("local.port");
const HOST = Cypress.env('local.host');

describe('redirect to congigure page', () => {
    beforeEach('Check side panel',() => {
        cy.get('span').contains('Create a job').click();
        cy.get('#name').type('JenkinsFolder');
        cy.get('li.com_cloudbees_hudson_plugins_folder_Folder').scrollIntoView();
        cy.wait(2000);
        cy.get('li.com_cloudbees_hudson_plugins_folder_Folder').click();
        cy.get('#ok-button').click();
        cy.get('a[href="/job/JenkinsFolder/"]').click();
    });
    it('TC_07.03.006 | Folder > Configure>check side panel has clickable links', ()=>{
        cy.visit(`http://${HOST}:${PORT}/job/JenkinsFolder/configure`);
    cy.get('div.task').each(($link) => {
      cy.wrap($link).should('have.class', 'task').and('be.visible');

    });
    })
});