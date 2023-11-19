import UserPage from '../pageObjects/UserPage';
class ManageJenkinsPage {
  getUsersLink = () => cy.get('a[href="securityRealm/"]');
  getHeaderManageJenkins = () => cy.get('.jenkins-app-bar h1');
  getManageJenkinsURL = () => cy.url();

  clickUsersLink() {
    this.getUsersLink().click();
    return new UserPage();
  }
}
export default ManageJenkinsPage;
