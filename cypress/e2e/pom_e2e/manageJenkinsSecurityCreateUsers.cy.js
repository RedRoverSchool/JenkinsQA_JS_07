/// <reference types="cypress"/>

import { userData } from '../../fixtures/pom_fixtures/createUsersData.json';
import createUsersData from '../../fixtures/pom_fixtures/createUsersData.json';
import HomePage from '../../pageObjects/HomePage';
import ManageJenkinsPage from '../../pageObjects/ManageJenkinsPage';
import UserPage from '../../pageObjects/UserPage';
import AddUserPage from '../../pageObjects/AddUserPage';

describe('ManageJenkinsSecurityCreateUsers.cy', () => {
  const homePage = new HomePage();
  const manageJenkinsPage = new ManageJenkinsPage();
  const userPage = new UserPage();
  const addUserPage = new AddUserPage();

  beforeEach(function () {
    homePage.clickManageJenkinsLink().clickUsersLink().clickCreateUserLink();
  });

  it('TC_09.14.001 | Manage Jenkins > Security> Create User using valid credentials', function () {
    addUserPage
      .fillUserNameField(createUsersData.username)
      .fillPasswordField(createUsersData.password)
      .fillCofirmPasswordField(createUsersData.password)
      .fillFullNameFieldd(createUsersData.fullName)
      .fillEmailAddressField(createUsersData.email)
      .clickButtonCreateUser();

    userPage.getCreatedUser().each(($el, idx) => {
      const nameofUsers = $el.text();
      expect(nameofUsers).to.be.equal(createUsersData.expectedUserId[idx]);
    });
  });

  userData.testName.forEach((item, index) => {
    it(`${userData.testCaseNumber[index]} |Manage Jenkins > Security > Create user > Verify error message displayed when ${item}`, function () {
      addUserPage
        .fillUserNameField(userData.username[index])
        .fillPasswordField(createUsersData.password)
        .fillCofirmPasswordField(userData.confirmPassword[index])
        .fillFullNameFieldd(createUsersData.fullName)
        .fillEmailAddressField(userData.email[index])
        .clickButtonCreateUser();

      addUserPage.getArrayOfEmptyFieldsErrorMessages().each(($el, idx) => {
        const errorMessages = $el.text();
        expect(errorMessages).to.be.equal(userData.error[index]);
      });
    });
  });

  it('TC_09.14.007 | Manage Jenkins > Security> Create User > Verify error messages are displayed if the fields are not filled', () => {
    addUserPage.clickButtonCreateUser();
    addUserPage.getArrayOfEmptyFieldsErrorMessages().then(($els) => {
      const errorMessages = Cypress.$.makeArray($els).map(
        ($els) => $els.innerText
      );
      expect(errorMessages).to.be.deep.equal(
        createUsersData.errorMessagesEmptyFieldsExpected
      );
    });
  });

  it('TC_09.14.004 |Manage Jenkins > Security> Create User > Verify Auto-Fill "Full Name" field with Username If the user leaves "Full name" field empty', function () {
    addUserPage
      .fillUserNameField(createUsersData.username)
      .fillPasswordField(createUsersData.password)
      .fillCofirmPasswordField(createUsersData.password)
      .fillEmailAddressField(createUsersData.email)
      .clickButtonCreateUser();

    userPage.getCreatedName().should('have.text', createUsersData.username);
  });
});
