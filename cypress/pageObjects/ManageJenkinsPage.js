import UserPage from '../pageObjects/UserPage';
import ConfigureToolsPage from "../pageObjects/ConfigureToolsPage";

class ManageJenkinsPage {
  getUsersLink = () => cy.get('a[href="securityRealm/"]');
  getHeaderManageJenkins = () => cy.get('.jenkins-app-bar h1');
  getSubHeadersManageJenkins = () => cy.get(".jenkins-section h2");
  getSystemConfigurationSection = (headerSection) => cy.get("section.jenkins-section--bottom-padding").contains(headerSection);
  getToolsTitleSectionItem = () => cy.get("a[href='configureTools'] dl dt");
  getToolsIconSectionItem = () => cy.get("a[href='configureTools'] .jenkins-section__item__icon");
  getManageJenkinsURL = () => cy.url();

  clickUsersLink() {
    this.getUsersLink().click();

    return new UserPage();
  }

  clickConfigureToolsLink() {
    this.getToolsTitleSectionItem().should("be.visible").click();

    return new ConfigureToolsPage();
  }
}
export default ManageJenkinsPage;
