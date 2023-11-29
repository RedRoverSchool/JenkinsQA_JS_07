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
                                     .getBuildEnvironmentSection()
                                     .should('be.visible')
        freestyleProjectConfigurePage.getBuildEnvironmentSectionOptions()
                                     .should('have.length', 6)
                                     .then($els => { 
                                        return Cypress.$.makeArray($els).map($el => $el.innerText.replace(/\n/g, '').trim())
                                    })
                                     .should('deep.equal', freestyleProjectData.buildEnvironment.buildEnvironmentOptions);     
    });  


    it('POM > TC_04.04.002 | Freestyle project > Build Environment > Checking visibility of tooltip message on hover the hint icon of the Use secret text(s) or file(s)', () => {
        freestyleProjectConfigurePage.clickBuildEnvironmentSectionMenuItem()                             
                                     .hoverUseSecretTextOptionTooltip()
                                     .getOptionTooltipContent()
                                     .should('be.visible')
                                     .and('have.text', freestyleProjectData.buildEnvironment.buildEnvironmentToolTipText)     
    });  
});

