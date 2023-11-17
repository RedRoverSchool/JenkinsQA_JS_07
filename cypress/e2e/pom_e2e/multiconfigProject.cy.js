/// <reference types="cypress"/>
import HomePage from "../../pageObjects/HomePage";
import multiconfigProjectData from "../../fixtures/pom_fixtures/multiconfigProjectData.json"


describe('multiconfigProject', () => {
    const homePage = new HomePage();
   
    it('Create Multiconfiguration project', function() {
        homePage.clickNewItemLink()
                .fillInputNameField(multiconfigProjectData.projectName)
                .clickMultiConfigTypeOfProjectBtn()
                .clickOKButton();

        homePage.clickDashboardBreadcrumbsLink()
                .getProjectNameLink()
                .should('be.visible')
                .and('have.text', multiconfigProjectData.projectName)
    })
})