/// <reference types="cypress" />

import folderName from "../fixtures/createFolder.json";
import title from "../fixtures/folderConfigure.json"

const PORT = Cypress.env("local.port");
const HOST = Cypress.env('local.host');

describe('redirect to congigure page', () => {
    beforeEach('Create folder',() => {
        cy.get('span').contains('Create a job').click();
        cy.get('#name').type(folderName.folderName);
        cy.get('li.com_cloudbees_hudson_plugins_folder_Folder').scrollIntoView();
        cy.wait(2000);
        cy.get('li.com_cloudbees_hudson_plugins_folder_Folder').click();
        cy.get('#ok-button').click();
        cy.get('a[href="/job/JenkinsFolder/"]').click();
    });
it('test', () => {
   cy.get('span').contains('Configure').click();
   cy.url().should('equal', `http://${HOST}:${PORT}/job/JenkinsFolder/configure`)
   cy.get('h1').contains(title.breadcrumbsConfigurationPage).should('be.visible');
})
})
