import UserPage from '../pageObjects/UserPage';
import {systemConfigurationSectionHeader} from "../fixtures/pom_fixtures/manageJenkinsUIData.json";

class ManageJenkinsPage {
  getUsersLink = () => cy.get('a[href="securityRealm/"]');
  getHeaderManageJenkins = () => cy.get('.jenkins-app-bar h1');
  getSubHeadersManageJenkins = () => cy.get(".jenkins-section h2");
  getSystemConfigurationSection = () => cy.get("section.jenkins-section--bottom-padding").contains(systemConfigurationSectionHeader);
  getToolsTitleSectionItem = () => cy.get("a[href='configureTools'] dl dt");
  getToolsIconSectionItem = () => cy.get("a[href='configureTools'] .jenkins-section__item__icon");
  getManageJenkinsURL = () => cy.url();

  clickUsersLink() {
    this.getUsersLink().click();
    return new UserPage();
  }
}
export default ManageJenkinsPage;
