/// <reference types="cypress"/>

const PORT = Cypress.env('local.port');
const HOST = Cypress.env('local.host');

import folderConfigureData from "../../fixtures/pom_fixtures/folderConfigureData.json"
import FolderPage from "../../pageObjects/FolderPage";
import HomePage from "../../pageObjects/HomePage";

describe('deleteFolder', ()=> {
    const folderPage = new FolderPage();
    const homePage = new HomePage();

    beforeEach(() => {
        cy.createNewFolder(folderConfigureData.folderName)
        folderPage
            .getDisplayFolderName()
            .should('include.text', folderConfigureData.folderName)
    });

    it('POM TC_07.05.001 | deleteCreatedFolder', () => {
        folderPage
            .clickDeleteFolderIcon()
            .clickSubmitDeleteBtn()
            .getJenkinsStartWorkTitle()
            .should('be.visible')
    })

    it('TC_07.05.003| Folder > Delete Folder > Delete Folder by using Dropdown menu', function () {
        folderPage
            .clickDeleteFolderIcon()
            .clickSubmitDeleteBtn();
            
        homePage
            .getWelcomedMessageHeader()
            .should('be.visible')
            .and('contain', dashboardWelcomeMessageData.welcomedMessageHeader);
    });
})