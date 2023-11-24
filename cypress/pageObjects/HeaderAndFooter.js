import headerAndFooterData from "../fixtures/pom_fixtures/headerAndFooterData.json";
class HeaderAndFooter {

  getUserMenuArrow = () => cy.get('div.login a[href*="user"] button');
  getUserDropdownMenuLinkBuilds = () => cy.get('.jenkins-dropdown a[href*="/builds"]');
  getJenkinsLogo = () => cy.get('#jenkins-head-icon');
  getJenkinsTitle = () => cy.get('#jenkins-name-icon');
  getUserMenuDropdown = () => cy.get('.jenkins-dropdown a');

  clickUserMenuArrow() {
    this.getUserMenuArrow().realHover().click();
    return this;
  }

  clickUserMenuDropdown(ind) {
    this.getUserMenuDropdown().eq(ind).click();
    return cy.url();
  }

  findUserPageHeaders(ind) {
    cy.contains(headerAndFooterData.userMenuPageHeaders[ind])
  }
}

export default HeaderAndFooter;