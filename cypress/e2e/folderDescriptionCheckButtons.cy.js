
import folderCreation from "../fixtures/folderCreation.json";

describe('Folder Description', () => {

    beforeEach('Create new folder', () => {
        cy.get('a[href= "/view/all/newJob"]').click();
        cy.get('input#name').type(folderCreation.folderName);
        cy.get('.com_cloudbees_hudson_plugins_folder_Folder').click();
        cy.get('#ok-button').click();
        cy.get('#jenkins-name-icon').click();
        cy.get('.jenkins-table__link.model-link.inside').click();
    })

    it('TC_07.02.003 | Verify that an empty input for text field appears when hit on “Add description” button', () => {

        cy.url().should('include', `/job/${folderCreation.folderName}/`);
        cy.get('#description-link').click();

        cy.get('.jenkins-input').should('be.visible')
    })

})