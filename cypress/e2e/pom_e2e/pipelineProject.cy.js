/// <reference types="cypress"/>

import HomePage from "../../pageObjects/HomePage";
import pipelineProjectData from "../../fixtures/pom_fixtures/pipelineProjectData.json";


describe('creatingPipelineProject', () => {
    const homePage = new HomePage();

    it('Create Pipeline Project', function() {
        homePage.clickNewItemLink()
                .fillInputNameField(pipelineProjectData.projectName)
                .PipelineTypeofProjectBtn()
                .clickOKButtonPipeline();

        homePage.clickDashboardBreadcrumbsLink()
                .getProjectNameLink()
                .should('be.visible')
                .and('have.text', pipelineProjectData.projectName);




    })

})
