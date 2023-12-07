/// <reference types="cypress"/>

import HomePage from "../../pageObjects/HomePage";
import folderNewItemRedirectToNewJobPageData from "../../fixtures/pom_fixtures/folderNewItemRedirectToNewJobPageData.json";
import dashboardWelcomeMessageData from "../../fixtures/pom_fixtures/dashboardWelcomedMessageData.json";

describe('Delete Folder by using Dropdown menu', function () {
    const homePage = new HomePage();

    beforeEach('Create Folder', function () {
        homePage.clickNewItemLink()
                .fillInputNameField(folderNewItemRedirectToNewJobPageData.folderName)
                .clickFolderBtn()
                .clickOKButtonFolder();

        homePage.clickDashboardBreadcrumbsLink();        
    });

    it('TC_07.05.003| Folder > Delete Folder > Delete Folder by using Dropdown menu', function () {
        homePage
            .clickNameProjectArrow()
            .clickDeleteProjectByDropdownBtn()
            .clickWindowConfirmOK(folderNewItemRedirectToNewJobPageData.windowConfirm)
        homePage
            .getWelcomedMessageHeader()
            .should('be.visible')
            .and('contain', dashboardWelcomeMessageData.welcomedMessageHeader);
    });
})
