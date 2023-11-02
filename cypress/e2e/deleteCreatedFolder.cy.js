/// <reference types="cypress"/>
const PORT = Cypress.env('local.port');
const HOST = Cypress.env('local.host');

import createFolder from "../fixtures/createFolder.json";

describe('deleteCreatedFolder', () => {
  beforeEach('createNewFolder', () => {
    cy.get('a[href="newJob"]').click();
    cy.get('input.jenkins-input').type(createFolder.newFolderName);
    cy.get('li.com_cloudbees_hudson_plugins_folder_Folder').contains(createFolder.folderLabel).click();
    cy.get('#ok-button').click();
    cy.get('button[name=Submit]').click();
    cy.get('#jenkins-name-icon').click();
    cy.get(`#job_${createFolder.newFolderName} .jenkins-table__link`).as('folderNameInTable').should('exist'); //checking that created folder is displayed on dashboard and made it alias
  });

  it('TC_07.05.001 | deleteCreatedFolder ', () => {
    cy.get('@folderNameInTable').click();
    cy.url().should('include', `job/${createFolder.newFolderName}`);
    cy.get('.confirmation-link').click(); // Delete Folder button 
    cy.on('window:confirm', () => true); // clicking "Ok" on alert window
    cy.url().should('equal', `http://${HOST}:${PORT}/`);
    cy.get('@folderNameInTable').should('not.exist');
  });
});
