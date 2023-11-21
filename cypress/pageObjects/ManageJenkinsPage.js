import UserPage from '../pageObjects/UserPage';
import ToolsPage from './ToolsPage';
class ManageJenkinsPage {
  getUsersLink = () => cy.get('a[href="securityRealm/"]');
  getHeaderManageJenkins = () => cy.get('.jenkins-app-bar h1');
  getManageJenkinsURL = () => cy.url();
  getToolsLink = () => cy.get('a[href="configureTools"]',{timeout: 3000});

  clickUsersLink() {
    this.getUsersLink().click();
    return new UserPage();
  }

  clickToolsLink(){
    this.getToolsLink().click()
    return new ToolsPage()
  }

}
export default ManageJenkinsPage;
