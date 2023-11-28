/// <reference types = "cypress"/>
import HomePage from "../../pageObjects/HomePage"
import NewJobPage from "../../pageObjects/NewJobPage"
import ProjectName from "../../fixtures/pom_fixtures/multiconfigProjectData.json"
import PipelinePage from "../../pageObjects/PipelinePage"
import PipelineConfigurePage from "../../pageObjects/PipelineConfigurePage"


describe('configureNewPipelineProject', function() {
    it('RF | POM | TC_03.05.011|Configure new Pipeline project >Verify to add and visible a Display Name', function() {
       const homePage = new HomePage()
       const newJobPage = new NewJobPage()
       const pipelinePage = new PipelinePage()
       const pipelineConfigurePage = new PipelineConfigurePage()
       
       homePage.clickNewItemLink()
                 .fillInputNameField(ProjectName.projectName)
                 .clickPipelineTypeOfProjectBtn()
                 .clickOKButton()
       homePage.clickDashboardBreadcrumbsLink()
               .clickProjectNameLink()
               .clickConfigureBtn()
       pipelineConfigurePage.clickAdvancedProjectOptionsBtn()
                            .typeInDisplayNameField(ProjectName.happyPathProjectName)
                            .clickSaveBtn()
        pipelinePage.getPipelineNameHeader()
                    .should('contain', ProjectName.happyPathProjectName)
       
    })
})