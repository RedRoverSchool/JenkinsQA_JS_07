import UserPage from '../pageObjects/UserPage';
import ConfigureToolsPage from "../pageObjects/ConfigureToolsPage";

class ManageJenkinsPage {
  getUsersLink = () => cy.get('a[href="securityRealm/"]');
  getHeaderManageJenkins = () => cy.get('.jenkins-app-bar h1');
  getSubHeadersManageJenkins = () => cy.get(".jenkins-section h2");
  getSystemConfigurationSection = (headerSection) => cy.get("section.jenkins-section--bottom-padding").contains(headerSection);
  getToolsSectionItem = () => cy.get("a[href='configureTools'] dl dt");
  getToolsIconSectionItem = () => cy.get("a[href='configureTools'] .jenkins-section__item__icon");
  getManageJenkinsURL = () => cy.url();

  clickUsersLink() {
    this.getUsersLink().click();

    return new UserPage();
  }

  clickConfigureToolsSectionItem() {
    this.getToolsSectionItem().should("be.visible").click();

    return new ConfigureToolsPage();
  }

  makeArrayOfSubHeadersManageJenkinsPage() {
    return this.getSubHeadersManageJenkins().should("be.visible")
      .then(($els) => {
        return Cypress.$.makeArray($els).map($el => $el.innerText);
      });
  }

  retrieveToolsSectionHeader() {
    return this.getToolsSectionItem().should("be.visible")
      .then(($el) => {
        $el.text();
      });
  }
}
export default ManageJenkinsPage;
