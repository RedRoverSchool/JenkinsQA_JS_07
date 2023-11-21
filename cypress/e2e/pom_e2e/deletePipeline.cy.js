/// <reference types="cypress"/>
import HomePage from "../../pageObjects/HomePage";
import pipelineProjectData from '../../fixtures/pom_fixtures/pipelineProjectData.json'
import pipelineDropDown from '../../fixtures/pom_fixtures/pipelineDropDown.json'

describe('Delete Pipeline',()=>{
    const homePage = new HomePage();
    beforeEach(()=>{
        homePage
           .clickNewItemLink()
           .fillInputNameField(pipelineProjectData.projectName)
           .clickPipelineTypeOfProjectBtn()
           .clickOKButtonPipelineProject()
        homePage   
           .clickDashboardBreadcrumbsLink()
        homePage
            .getProjectTable().should('exist')
    
            })
      
   

    it('POM>TC_05.05.004|PipelineDelete> Verify popup confirm window has message',()=>{
        homePage.clickNameProjectArrow()
                .clickDeletePipelineBtn()
                .clickWindowConfirm(pipelineDropDown.messages.windowConfirm)
                
    })

    it('POM>TC_05.05.005 | Pipeline > Delete cancellation Pipeline on Dashboard Page',()=>{
                
        homePage.clickNameProjectArrow()
                .clickDeletePipelineBtn()
                .clickWindowConfirmOK(pipelineDropDown.messages.windowConfirm)
        homePage.getProjectTable().should('not.exist')

    })
})