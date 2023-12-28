/// <reference types="cypress"/>

import HomePage from "../../pageObjects/HomePage";
import folderNewItemRedirectToNewJobPageData from "../../fixtures/pom_fixtures/folderNewItemRedirectToNewJobPageData.json";
import newJobPageData from "../../fixtures/pom_fixtures/newJobPageData.json"

describe('Folder NewItem redirect to NewJobPage', function () {
    const homePage = new HomePage();
    
    beforeEach('Create Folder', () => {
        homePage
        .clickNewItemLink()
        .fillInputNameField(folderNewItemRedirectToNewJobPageData.folderName)
        .clickFolderBtn()
        .clickOKButtonFolder();

        homePage.clickDashboardBreadcrumbsLink();
        })

    it('TC_07.04.002 | Folder > New item| redirected to the NewJobPage', function () {
        
        homePage            
            .clickFoldertNameLink(folderNewItemRedirectToNewJobPageData.folderName)
            .clickNewItemOnFolderPage()
            .getHeaderNewJobPageText()
            .should('be.visible')        
            .and('contain', newJobPageData.title);
    })
})
