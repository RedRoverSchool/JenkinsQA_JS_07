/// <reference types = "cypress"/> 

import HomePage from "../../pageObjects/HomePage";
import PipelinePage from "../../pageObjects/PipelinePage";
import PipelineName from "../../fixtures/pom_fixtures/pipelineProjectData.json"
import Description from "../../fixtures/pom_fixtures/pipelineProjectData.json"

describe ('addDescriptionToPipeline', function() {
    const homepage = new HomePage()
    const pipelinePage = new PipelinePage()
    
    it('RF | POM | TC_03.05.001 | Create Pipeline Project >Verify ability to Fill in the project description in the "Description" text area and save it', function(){
        homepage.clickNewItem()
                .clickPipelineTypeOfProjectBtn()
                .fillInputNameField(PipelineName.projectName)
                .clickOKButton()
        homepage.clickDashboardBreadcrumbsLink()
                .clickProjectNameLink()
                .clickConfigureBtn()
                .fillDescriptionField(Description.pipelineDescription)
                .clickSaveBtn()
        pipelinePage.getPipelineDescription()
                    .should('be.visible')
                    .should('contain', Description.pipelineDescription)


    })
})