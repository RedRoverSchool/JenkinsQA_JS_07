/// <reference types="cypress"/>

import HeaderAndFooter from "../../pageObjects/HeaderAndFooter"
import headerAndFooterData from "../../fixtures/pom_fixtures/headerAndFooterData.json";

describe('Header > User menu', () => {
  const headerAndFooter = new HeaderAndFooter();
  beforeEach(() => {
    headerAndFooter.clickUserMenuArrow();
  });

  headerAndFooterData.userMenuLinks.forEach((el, ind) => {
    it('RF | POM > TC_17.04.001 | Header > User menu > Verify Params link in Dropdown menu', () => {
      headerAndFooter.clickUserMenuDropdown(ind)
        .should('contain', headerAndFooterData.userMenuEndPoints[ind])
      headerAndFooter.findUserPageHeaders(ind);
    })
  })
})