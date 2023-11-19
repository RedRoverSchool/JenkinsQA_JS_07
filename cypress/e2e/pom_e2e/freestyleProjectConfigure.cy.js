/// <reference types="cypress"/>

import HomePage from "../../pageObjects/HomePage";
import FreestyleProjectConfigurePage from "../../pageObjects/FreestyleProjectConfigurePage";
import data from "../../fixtures/pom_fixtures/freestyleProjectData.json"

describe('freestyleProjectConfigure', () => {
    const homePage = new HomePage();
    const freestyleProjectConfigurePage = new FreestyleProjectConfigurePage();
    const { sectionName } = data.configure.sourceCodeManagement;
    
    beforeEach(() => {
        homePage.clickNewItemLink()
                .fillInputNameField(data.projectName)
                .clickFreestyleTypeOfProjectBtn()
                .clickOKButtonFreestyle()
                .clickSourceCodeManagementMenuItem()
    });

    it('TC_04.02.001 | Freestyle > Source Code Management > Source Code Management section is displayed', () => {
        freestyleProjectConfigurePage.getSourceCodeManagementSection()
                                     .should('be.visible')
                                     .and('contain', sectionName);
    });
});