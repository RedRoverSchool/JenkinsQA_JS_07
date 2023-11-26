/// <reference types="cypress"/>

import HomePage from "../../pageObjects/HomePage";
import FreestyleProjectConfigurePage from "../../pageObjects/FreestyleProjectConfigurePage";
import freestyleProjectData from "../../fixtures/pom_fixtures/freestyleProjectData.json";

describe('freestyleProjectBuildEnvironment', () => {
    const homePage = new HomePage();
    const freestyleProjectConfigurePage = new FreestyleProjectConfigurePage();
       
    beforeEach(() => {
        homePage.clickNewItemLink()
                .fillInputNameField(freestyleProjectData.projectName)
                .clickFreestyleTypeOfProjectBtn()
                .clickOKButtonFreestyle()              
    });
   
    it('POM > TC_04.04.001 | Freestyle project > Visibility of the Build Environment options', () => {
        freestyleProjectConfigurePage.clickBuildEnvironmentSectionMenuItem()
                                     .getSourceCodeManagementSection()
                                     .should('be.visible')
        freestyleProjectConfigurePage.getBuildEnvironmentSectionOptions()
                                     .should('have.length', 6)
                                     .then($els => { 
                                        return Cypress.$.makeArray($els).map($el => $el.innerText.replace(/\n/g, '').trim())
                                    })
                                     .should('deep.equal', freestyleProjectData.buildEnvironment.buildEnvironmentOptions);     
    });  
});

