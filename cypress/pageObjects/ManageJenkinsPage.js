import UserPage from '../pageObjects/UserPage';
import ConfigureToolsPage from './ConfigureToolsPage';

class ManageJenkinsPage {
  getUsersLink = () => cy.get('a[href="securityRealm/"]');
  getHeaderManageJenkins = () => cy.get('.jenkins-app-bar h1');
  getManageJenkinsURL = () => cy.url();
  getToolsLink = () => 
  cy.get('a[href="configureTools"]');

  clickUsersLink() {
    this.getUsersLink().click();
    return new UserPage();
 
  }
  clickToolsLink(){
    this.getToolsLink().click()
    return new ConfigureToolsPage()
  }
}
export default ManageJenkinsPage;
