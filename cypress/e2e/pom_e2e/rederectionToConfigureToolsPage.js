/// <reference types="cypress"/>
import ConfigureToolsPage from "../../pageObjects/ConfigureToolsPage";
import HomePage from "../../pageObjects/HomePage";
import ManageJenkinsPage from "../../pageObjects/ManageJenkinsPage"
import Title from "../../fixtures/pom_fixtures/configureToolsTitle.json"

describe('System Configuration', () => {
    const homePage = new HomePage();
    const manageJenkins = new ManageJenkinsPage();
    const configureToolsPage = new ConfigureToolsPage

  it('TC__09.06.02 | | Manage Jenkins > System Configuration > Verify redirection to Tools Page', function(){
    homePage.clickManageJenkinsLink()
    manageJenkins.clickToolsLink()
    configureToolsPage.viewToolsTitle()
                      .should('have.text',Title)
  })  
})