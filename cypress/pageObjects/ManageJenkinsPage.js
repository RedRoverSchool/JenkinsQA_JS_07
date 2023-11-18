import UserPage from '../pageObjects/UserPage';
class ManageJenkinsPage {
  getUsersLink = () => cy.get('a[href="securityRealm/"]');

  clickUsersLink() {
    this.getUsersLink().click();
    return new UserPage();
  }
}
export default ManageJenkinsPage;
