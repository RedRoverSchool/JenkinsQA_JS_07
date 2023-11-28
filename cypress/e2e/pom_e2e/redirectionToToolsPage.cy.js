/// <reference types="cypress"/>
import HomePage from "../../pageObjects/HomePage";
import configureToolsData from "../../fixtures/pom_fixtures/configureToolsData.json"

describe('redirection to Tools Page', () => {
  const homePage = new HomePage();

  it('TC__09.06.02 | Verify redirection to Tools Page', () => {
    homePage.clickManageJenkinsLink()
      .clickToolsLink()
      .getToolsTitle()
      .should('have.text', configureToolsData.Title)
  })
})
