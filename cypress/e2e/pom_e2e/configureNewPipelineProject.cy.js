/// <reference types="cypress"/>

import HomePage from "../../pageObjects/HomePage";
import PipelineConfigurePage from "../../pageObjects/PipelineConfigurePage";
import pipelineProjectData from "../../fixtures/pom_fixtures/pipelineProjectData.json";
import configurePageData from "../../fixtures/pom_fixtures/configurePageData.json";
import PipelinePage from "../../pageObjects/PipelinePage";
import pipelinePageData from "../../fixtures/pom_fixtures/pipelinePageData.json"

describe('configureNewPipelineProject', () => {
    const homePage = new HomePage();
    const pipelineConfigurePage = new PipelineConfigurePage();
    const pipelinePage = new PipelinePage();

    beforeEach(() => {
    
    cy.createPipelineProject(pipelineProjectData.projectName)

    });
    
    it('TC_03.05.010 Configure new Pipeline project >Verify "Enable/Disable" switch toggle', () => {   
        pipelineConfigurePage.clickEnabDisabSwitchToggle()
                             .getLabelDisabled()
                             .should ('be.visible')
                             .and('have.text',configurePageData.statusDisabled);
        pipelineConfigurePage.clickEnabDisabSwitchToggle()
                             .getLabelEnabled()
                             .should ('be.visible')
                             .and('have.text',configurePageData.statusEnabled);
    });

    it('TC_03.05.002 | New Item > Create Pipeline Project > Configure new Pipeline project>Verify Enable/Disable the current project', () => {        
        pipelineConfigurePage.clickEnabDisabSwitchToggle()
                             .clickSaveBtn();
                             
        pipelinePage
                    .getDisabledProgectWarning()
                    .should ('be.visible')
                    .and('include.text',pipelinePageData.disabledProjectMessage);        
    });
    it('RF|POM|TC_03.05.014 Configure new Pipeline project>Verify that proper information is displayed after clicking the "?" button',()=>{
                              
       
        pipelineConfigurePage.realHoverDiscardOldBuildsHelpBtn()       
                             .getTooltipDiscardOldBuildsHelp()
                             .should('have.text',configurePageData.tooltipHelpOfDiscardOldBuilds)
  
        })
        
     })