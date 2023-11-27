/// <reference types = "cypress"/>
import HomePage from "../../pageObjects/HomePage"
import NewJobPage from "../../pageObjects/NewJobPage"
import ProjectName from "../../fixtures/pom_fixtures/multiconfigProjectData.json"

describe ('createMultiConfigProjects', function(){
    it('RF | POM | TC_03.06.003 | Create Multiconfiguration project by clicking "+ New item" in the drop-down menu under the Dashboard', function (){
    const homePage = new HomePage()
    const newJob = new NewJobPage()

    homePage.getDashboardBreadcrumbsLink().realHover('mouseover')
    homePage.createNewItemkDashboardLinkDropdown()
    newJob.fillInputNameField(ProjectName.projectName)
           .clickMultiConfigTypeOfProjectBtn()
           .clickOKButton()
    homePage.clickDashboardBreadcrumbsLink()
            .getProjectNameLink().should('be.visible')
            .and('have.text', ProjectName.projectName)

    })
})