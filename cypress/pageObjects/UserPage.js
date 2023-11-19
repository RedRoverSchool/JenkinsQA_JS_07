import AddUserPage from '../pageObjects/AddUserPage';
class UserPage {
  getCreateUserLink = () => cy.get('a[href="addUser"]');
  getCreatedUser = () => cy.get('td a[href*="user"].jenkins-table__link');

  clickCreateUserLink() {
    this.getCreateUserLink().click();
    return new AddUserPage();
  }
}
export default UserPage;
