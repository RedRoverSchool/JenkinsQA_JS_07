/// <reference types="cypress"/>

import HomePage from "../../pageObjects/HomePage";
import freestyleProjectData from "../../fixtures/pom_fixtures/freestyleProjectData.json"
import BuildHistoryPage from "../../pageObjects/BuildHistoryPage";


describe('Build History of FreestyleProject',function(){
    const homePage= new HomePage()
    const buildHistoryPage = new BuildHistoryPage()

    it('TC_04.07.001 | Freestyle > Build History > Verify see name project in build history calendar',function(){
        homePage.clickNewItemLink()
                .fillInputNameField(freestyleProjectData.projectName)
                .clickFreestyleTypeOfProjectBtn()
                .clickOKButtonFreestyle();

        homePage.clickDashboardBreadcrumbsLink()
                .getProjectNameLink()
                .should('be.visible')
                .and('have.text', freestyleProjectData.projectName)

         buildHistoryPage.clickCreateBuild()
         homePage.clickDashboardBreadcrumbsLink()  
         homePage.clickBuildHistoryLink()
         buildHistoryPage.clickCreateHistoryBuild()
                  .clickWindowBuildHistory()  
                  .getTitleBuild().should('contain', freestyleProjectData.projectName)              
                   
    })
})