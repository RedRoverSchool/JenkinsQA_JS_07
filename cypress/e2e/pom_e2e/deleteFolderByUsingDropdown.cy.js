/// <reference types="cypress"/>

import HomePage from "../../pageObjects/HomePage";
import deleteFolderByUsingDropdownData from "../../fixtures/pom_fixtures/deleteFolderByUsingDropdownData.json";
import dashboardWelcomeMessageData from "../../fixtures/pom_fixtures/dashboardWelcomedMessageData.json";

describe('Delete Folder by using Dropdown menu', function () {
    const homePage = new HomePage();

    beforeEach('Create Folder', function () {
        homePage.clickNewItemLink()
                .fillInputNameField(deleteFolderByUsingDropdownData.folderName)
                .clickFolderBtn()
                .clickOKButtonFolder();

        homePage.clickDashboardBreadcrumbsLink();        
    });

    it('TC_07.05.003| Folder > Delete Folder > Delete Folder by using Dropdown menu', function () {
        homePage
            .clickNameProjectArrow()
            .clickDeleteProjectByDropdownBtn()
            .clickWindowConfirmOK(deleteFolderByUsingDropdownData.windowConfirm)
        homePage
            .getWelcomedMessageHeader()
            .should('be.visible')
            .and('contain', dashboardWelcomeMessageData.welcomedMessageHeader);
    });
})
