/// <reference types="cypress"/>
import userMenu from '../fixtures/verifyUserMenu.json';

describe('Header > User menu', () => {
  beforeEach(() => {
    cy.get('div.login a[href*="user"] button').realHover().click();
    cy.get('.jenkins-dropdown a').as('userMenu');
  })

  userMenu.userMenuLinks.forEach((el, index) => {
    it(`TC_17.04.001 | Header > User menu > Verify links in Dropdown menu ${userMenu.userMenuLinks[index]}`, () => {
      cy.get('@userMenu').eq(index).click();
      cy.url().should('contain', userMenu.userMenuEndPoints[index]);
      cy.contains(userMenu.userMenuPageHeaders[index]);
    })
  })

})