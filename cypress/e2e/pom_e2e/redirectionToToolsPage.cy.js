/// <reference types="cypress"/>
import HomePage from "../../pageObjects/HomePage";
import configureToolsTitle from "../../fixtures/pom_fixtures/configureToolsTitle.json"

describe('System Configuration', () => {
  const homePage = new HomePage();

  it('TC__09.06.02 | Verify redirection to Tools Page', () => {
    homePage.clickManageJenkinsLink()
      .clickToolsLink()
      .getToolsTitle()
      .should('have.text', configureToolsTitle.Title)
  })
})
