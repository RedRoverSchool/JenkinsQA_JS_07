/// <reference types="cypress"/>

import HeaderAndFooter from "../../pageObjects/HeaderAndFooter"
import UserBuildsPage from "../../pageObjects/UserBuildsPage";
import headerAndFooterData from "../../fixtures/pom_fixtures/headerAndFooterData.json";

describe('Header > User menu', () => {
  const headerAndFooter = new HeaderAndFooter();
  const userBuildsPage = new UserBuildsPage();
  beforeEach(() => {
    headerAndFooter.clickUserMenuArrow();
  });

  it('RF | POM > TC_17.04.001 | Header > User menu > Verify Builds link in Dropdown menu', () => {
    headerAndFooter.clickUserDropdownMenuLinkBuilds();
    userBuildsPage.getUserBuildsURL().should('contain', headerAndFooterData.userMenuEndPoints.builds);
    userBuildsPage.getUserBuildsHeader().should('include.text', headerAndFooterData.userMenuPageHeaders.builds);
  })

})