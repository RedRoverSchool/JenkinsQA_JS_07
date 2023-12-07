///<reference types = "cypress"/>

import HomePage from "../../pageObjects/HomePage";
import freestyleProjectData from "../../fixtures/pom_fixtures/freestyleProjectData.json";
import FreestyleProjectConfigurePage from "../../pageObjects/FreestyleProjectConfigurePage";

describe('Check secret text', function() {
    const homePage = new HomePage();
    const freestyleProjectConfigurePage = new FreestyleProjectConfigurePage();    

    beforeEach(() => {
        homePage.clickNewItemLink()
                .fillInputNameField(freestyleProjectData.projectName)
                .clickFreestyleTypeOfProjectBtn()
                .clickOKButtonFreestyle()
                // .getConfigurePageHeader().should('be.visible').and('have.text', freestyleProjectData.configure.configureHeader)  
          
    });

    it('POM > TC_04.04.006 | Check Secret Text In Freestyle Project Configuration', () => {        
        freestyleProjectConfigurePage.clickBuildEnvironmentSectionMenuItem()
                                     .hoverViewHintUseSecretText()
                                    //  .getHintTextFromUseSecretText()
                                     .getOptionTooltipContent()
                                     .should('be.visible')
                                     .and('have.text', freestyleProjectData.buildEnvironment.buildEnvironmentToolTipText)
                                      
    });
});
