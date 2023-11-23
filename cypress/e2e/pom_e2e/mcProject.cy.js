/// <reference types="cypress"/>
import McProjectHomePage from "../../pageObjects/McProjectHomePage";
import mcProjectData from "../../fixtures/pom_fixtures/mcProjectData.json"; 
// import McProjectNewJobPage from "../../pageObjects/McProjectNewJobPage";
// import McProjectConfigProjectPage from "../../pageObjects/McProjectConfigProjectPage";

describe('mcProject', () => {    

    const mcProjectHomePage = new McProjectHomePage;
    // const mcProjectNewJobPage = new McProjectNewJobPage;
    // const mcProjectConfigProjectPage = new McProjectConfigProjectPage;

    it('Create Multiconfiguration project', function() {
        mcProjectHomePage.clickNewItemlink()
                         .fillInputNameField(mcProjectData.projectName)
                         .clickMulticonfigTypeOfProjectRBtn()
                         .clickOkBtn();

        mcProjectHomePage.clickDashboardBreadcrumbsLink()
                         .getProjectNameLink()
                         .should('be.visible')
                         .and('have.text', mcProjectData.projectName)
    })
})    
        