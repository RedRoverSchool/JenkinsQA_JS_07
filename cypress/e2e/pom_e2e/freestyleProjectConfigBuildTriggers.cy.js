/// <reference types="cypress"/>

import freestyleProjectData from "../../fixtures/pom_fixtures/freestyleProjectData.json"
import FreestyleProjectConfigurePage from "../../pageObjects/FreestyleProjectConfigurePage";
import HomePage from "../../pageObjects/HomePage";

describe('freestyleProjectConfigBuildTriggers', () => {
    const homePage = new HomePage
    const freestyleProjectConfigurePage = new FreestyleProjectConfigurePage

    beforeEach(function () {
        homePage.clickNewItemLink()
                .fillInputNameField(freestyleProjectData.projectName)
                .clickFreestyleTypeOfProjectBtn()
                .clickOKButton()
        freestyleProjectConfigurePage.getListOfBuildTriggerOptions().as('list')  
    });

    freestyleProjectData.triggerOptions.forEach((option, ind) => {
    const buildTriggesOptionName = Object.keys(option)[0]
    const buildTriggerHintIconText = Object.values(option)[0]

        it(`POM > TC_04.03.001 | Freestyle | Build Triggers config > Verify list of options is displayed `, function () {
            freestyleProjectConfigurePage.getOneItemOfListBuildTriggerOption(cy.wrap(this.list[ind])).should('have.text', buildTriggesOptionName)
        });
        it ("POM > TC_04.03.002 | Freestyle | Build Triggers config > Verify hint icons text", function () {
            freestyleProjectConfigurePage.hoverOneOfHintIconFromBuildTriggersList(cy.wrap(this.list[ind]))
            freestyleProjectConfigurePage.getHintIconTip()
                                        .should('be.visible')
                                        .should('have.text', buildTriggerHintIconText)
        });
    });
});
