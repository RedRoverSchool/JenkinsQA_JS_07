/// <reference types="cypress"/>

const PORT = Cypress.env('local.port');
const HOST = Cypress.env('local.host');

import folderConfigureData from "../../fixtures/pom_fixtures/folderConfigureData.json"
import HomePage from "../../pageObjects/HomePage";
import FolderPage from "../../pageObjects/FolderPage";

describe('deleteFolder', ()=> {
    const homePage = new HomePage();
    const folderPage = new FolderPage();

    beforeEach(() => {
        homePage
            .clickNewItemLink()
            .fillInputNameField(folderConfigureData.folderName)
            .clickFolderBtn()
            .clickOKButtonFolder()
            .clickSaveBtn()
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
})