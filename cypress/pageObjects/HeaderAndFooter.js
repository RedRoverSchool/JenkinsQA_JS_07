import UserBuildsPage from "./UserBuildsPage";

class HeaderAndFooter {

  getUserMenuArrow = () => cy.get('div.login a[href*="user"] button');
  getUserDropdownMenuLinkBuilds = () => cy.get('.jenkins-dropdown a[href*="/builds"]');



  clickUserMenuArrow() {
    this.getUserMenuArrow().realHover().click()

    return this;
  }

  clickUserDropdownMenuLinkBuilds() {
    this.getUserDropdownMenuLinkBuilds().click();

    return new UserBuildsPage();
  }

}

export default HeaderAndFooter;