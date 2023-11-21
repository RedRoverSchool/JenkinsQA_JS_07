/// <reference types="cypress"/>

import HomePage from "../../pageObjects/HomePage";
import PipelineConfigurePage from "../../pageObjects/PipelineConfigurePage";
import createPipelineProject4 from "../../fixtures/pom_fixtures/pipelineProjectData.json";
import configurePageData from "../../fixtures/pom_fixtures/configurePageData.json"

describe('configureNewPipelineProject', () => {
    const homePage = new HomePage();
    const pipelineConfigurePage = new PipelineConfigurePage();

    beforeEach(() => {
       homePage.clickNewItemLink()
               .fillInputNameField(createPipelineProject4.projectName)
               .clickPipelineTypeOfProjectBtn()
               .clickOKButton();
    });
    
    it('TC_03.05.010 Configure new Pipeline project >Verify "Enable/Disable" switch toggle', () => {   
        pipelineConfigurePage.clickEnabDisabSwitchToggle()
                             .getLabelDisabled()
                             .should ('be.visible')
                             .and('have.text',configurePageData.statusDisabled)
        pipelineConfigurePage.clickEnabDisabSwitchToggle()
                             .getLabelEnabled()
                             .should ('be.visible')
                             .and('have.text',configurePageData.statusEnabled)
    });

});