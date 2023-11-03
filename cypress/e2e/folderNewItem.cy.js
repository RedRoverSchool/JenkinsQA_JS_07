/// <reference types="cypress"/>

import createFolder from "../fixtures/createFolder.json";

describe('Folder>New Item> Page Redirection', () => {
  beforeEach('createFolder', () => {
    cy.get('a[href="newJob"]').click();
    cy.get('.jenkins-input').type(createFolder.newFolderName);
    cy.get('li[tabindex="0"] span').contains(createFolder.folderLabel).click();
    cy.get('#ok-button').click();
    cy.get('button[name=Submit]').click();
  });

  it.only('TC_07.04.001 | Folder >Verify that +New Item redirected to "New job" from the project type Folder', () => {
    cy.get('#main-panel > h1').then(($h1) => {
      const text = $h1.text().trim();
      expect(text).to.equal(createFolder.newFolderName);
    });
    cy.get('div:nth-child(3) > span > a').click();

    cy.url().should('include', '/newJob');
  });
});
