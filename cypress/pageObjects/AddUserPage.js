import UserPage from '../pageObjects/UserPage';

class AddUserPage {
  getUserNameField = () => cy.get('#username');
  getPasswordField = () => cy.get('input[name="password1"]');
  getCofirmPasswordField = () => cy.get('input[name="password2"]');
  getFullNameField = () => cy.get('input[name="fullname"]');
  getEmailAddressField = () => cy.get('input[name="email"]');
  getButtonCreateUser = () => cy.get('button[name="Submit"]');

  fillUserNameField(username) {
    this.getUserNameField().should('be.visible').type(username);
    return this;
  }

  fillPasswordField(password) {
    this.getPasswordField().should('be.visible').type(password);
    return this;
  }

  fillCofirmPasswordField(password) {
    this.getCofirmPasswordField().should('be.visible').type(password);
    return this;
  }

  fillFullNameFieldd(fullName) {
    this.getFullNameField().should('be.visible').type(fullName);
    return this;
  }

  fillEmailAddressField(email) {
    this.getEmailAddressField().should('be.visible').type(email);
    return this;
  }

  clickButtonCreateUser() {
    this.getButtonCreateUser().click();
    return new UserPage();
  }
}
export default AddUserPage;
