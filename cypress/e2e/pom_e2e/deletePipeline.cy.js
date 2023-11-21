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
    
            })
      
   

    it('POM>TC_05.05.004|PipelineDelete> Verify popup confirm window has message',()=>{
        homePage.clickNameProjectArrow()
                .clickDeletePipelineBtn()
                .clickWindowConfirmCancel(pipelineDropDown.messages.windowConfirm)
                
    })
})