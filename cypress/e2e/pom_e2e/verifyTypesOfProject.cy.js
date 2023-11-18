/// <reference types = "cypress"/>
import HomePage from "../../pageObjects/HomePage";
import NewJobPage from "../../pageObjects/NewJobPage";
describe ('Verify Types Of Project', () => {
    const homePage = new HomePage();
    const newJobPage = new NewJobPage();

    it('TC_03.01.012 | + New Item > Verify that all types of project are dispayled', function() { 
          homePage.clickNewItemLink()
          newJobPage.getFreestyleProjectBtn()
                    .should('be.visible')
          newJobPage.getPipelineBtn()
                    .should('be.visible')
          newJobPage.getMultiConfigTypeOfProjectBtn()
                    .should('be.visible')
          newJobPage.getFolderBtn()
                    .should('be.visible')
          newJobPage.getMultibranchPipelineBtn()
                    .should('be.visible')
          newJobPage.getOrganizationFolder()
                    .should('be.visible')
                  

    })
})