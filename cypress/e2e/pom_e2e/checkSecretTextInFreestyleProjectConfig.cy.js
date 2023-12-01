///<reference types = "cypress"/>

import HomePage from "../../pageObjects/HomePage";
import freestyleProjectData from "../../fixtures/pom_fixtures/freestyleProjectData.json";
import FreestyleProjectConfigurePage from "../../pageObjects/FreestyleProjectConfigurePage";

describe('Check secret text', function() {
    const homePage = new HomePage();
    const freestyleProjectConfigurePage = new FreestyleProjectConfigurePage();    

    beforeEach(function() {
        homePage.clickNewItemLink()
                .fillInputNameField(freestyleProjectData.projectName)
                .clickFreestyleTypeOfProjectBtn()
                .clickOKButtonFreestyle()
                // .getConfigurePageHeader().should('be.visible').and('have.text', freestyleProjectData.configure.configureHeader)  
          
    });

    it('TC_04.04.006 | Check Secret Text In Freestyle Project Configuration', function() {
        
        freestyleProjectConfigurePage.clickBuildEnvironment()
        // cy.get('button[data-section-id="build-environment"]').click()
        // cy.get('section input[id*="cb2"]').should('have.length', 6).then(($els) => {
            // const requiredItems = Cypress.$.makeArray($els).map(($el) => $el.innerText.replace(/\n/g, '').trim());   

       
    });
});
