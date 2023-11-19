/// <reference types="cypress"/>

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
    homePage.clickManageJenkinsLink()
            .clickUsersLink()
            .clickCreateUserLink();
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
});
