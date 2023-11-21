/// <reference types="cypress"/>

import HomePage from "../../pageObjects/HomePage";
import freestyleProjectData from "../../fixtures/pom_fixtures/freestyleProjectData.json"
import BuildHistoryPage from "../../pageObjects/BuildHistoryPage";


describe('Build History of FreestyleProject',function(){
    beforeEach(function(){
        homePage.clickNewItemLink()
        .fillInputNameField(freestyleProjectData.projectName)
        .clickFreestyleTypeOfProjectBtn()
        .clickOKButtonFreestyle();

homePage.clickDashboardBreadcrumbsLink()
        .getProjectNameLink()
        .should('be.visible')
        .and('have.text', freestyleProjectData.projectName)
    })
    const homePage= new HomePage()
    const buildHistoryPage = new BuildHistoryPage()

    it('TC_04.07.001 | Freestyle > Build History > Verify see name project in build history calendar',function(){
         buildHistoryPage.clickCreateBuild()
         homePage.clickDashboardBreadcrumbsLink()  
         homePage.clickBuildHistoryLink()
         buildHistoryPage.clickCreateHistoryBuild()
                  .clickWindowBuildHistory()  
                  .getTitleBuild().should('contain', freestyleProjectData.projectName)              
                   
    })

    it('POM > TC_04.07.002 Freestyle> Build History>Verify display the start , end times and data of each build',function(){
       
        homePage
            .clickScheduleBuildBtn()             
            .clickCreateHistoryBuild()                   
        buildHistoryPage
            .clickWindowBuildHistory() 
            .getTimeFromBuildLabel().then(el=>{
                let actData=el.text().slice(0,22)
                let expData1=homePage.expData1()
                expect(actData).to.be.eql(expData1)
            })
         
        })
    })

