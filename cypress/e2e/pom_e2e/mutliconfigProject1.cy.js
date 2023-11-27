/// <reference types="cypress"/>
import HousePage from "../../pageObjects/HousePage"
import multiconfigProjectData1 from "../../fixtures/pom_fixtures/multiconfigProjectData1.json"


describe ('multiconfigProject1', () => {
    const housePage = new HousePage();
    //const newJobPage1 = new JobPage1();
it('Create Multiconfiguration project', function(){
    housePage.clickNewItemLink()
             .fillInputNameField(multiconfigProjectData1.projectName)
             .clickMultiConfigTypeOfProjectBtn()
             .clickOKButton()
             
        housePage.clickDashboardBreadcrumbsLink()
                 .getProjectNameLink()
                 .should('be.visible')
                 .and('have.text', multiconfigProjectData1.projectName)
                


})
})