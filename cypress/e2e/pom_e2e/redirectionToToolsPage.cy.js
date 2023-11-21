/// <reference types="cypress"/>
import ToolsPage from "../../pageObjects/ToolsPage";
import HomePage from "../../pageObjects/HomePage";
import ManageJenkinsPage from "../../pageObjects/ManageJenkinsPage"
import configureToolsTitle from "../../fixtures/pom_fixtures/configureToolsTitle.json"

describe('System Configuration', () => {
    const homePage = new HomePage();
    const manageJenkins = new ManageJenkinsPage();
    const toolsPage = new ToolsPage

    it('TC__09.06.02 | Verify redirection to Tools Page', ()=> {
    homePage.clickManageJenkinsLink();
    manageJenkins.clickToolsLink();
    toolsPage.getToolsTitle()
             .should('have.text',configureToolsTitle.Title)
  })  
})
