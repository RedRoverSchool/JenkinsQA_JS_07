class UserBuildsPage {
  getUserBuildsURL = () => cy.url();
  getUserBuildsHeader = () => cy.get('div h1');

}

export default UserBuildsPage; 