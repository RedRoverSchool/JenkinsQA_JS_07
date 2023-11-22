/// <reference types="cypress"/>

import HomePage from "../../pageObjects/HomePage";
import FreestyleProjectConfigurePage from "../../pageObjects/FreestyleProjectConfigurePage";
import data from "../../fixtures/pom_fixtures/freestyleProjectData.json"

describe('freestyleProjectConfigure', () => {
    const homePage = new HomePage();
    const freestyleProjectConfigurePage = new FreestyleProjectConfigurePage();
    const { sectionName, radioButtonNames } = data.configure.sourceCodeManagement;
    
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

    it('TC_04.02.002 | Freestyle > Source Code Management > Verify there are two radio buttons', () => {
        freestyleProjectConfigurePage.getSourceCodeManagementSectionBtns()
                                     .should('have.length', 2);
        freestyleProjectConfigurePage.getSourceCodeManagementSectionLbls()     
                                     .each(($el, index) => {
                                        expect($el.text()).to.be.eql(radioButtonNames[index])
                                     });    
    });

    it('TC_04.02.003 | Freestyle > Source Code Management > “None” option is selected by default', () => {
        freestyleProjectConfigurePage.getSrcCodeMngmntNoneOption().should('be.checked')
    });
});