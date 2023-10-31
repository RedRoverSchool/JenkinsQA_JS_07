/// <reference types="cypress"/>

import manageJenkinsSecurityCreateUser from '../fixtures/manageJenkinsSecurityCreateUser.json';

describe('ManageJenkinsSecurityCreateUser.cy', () => {
  it('TC_09.14.001 | Manage Jenkins > Security> Create User using valid credentials', function () {
    cy.get('a[href="/manage"]').click();
    cy.get('a[href="securityRealm/"]').click();
    cy.get('a[href="addUser"]').click();
    cy.get('#username').type(manageJenkinsSecurityCreateUser.username);
    cy.get('input[name="password1"]').type(
      manageJenkinsSecurityCreateUser.password
    );
    cy.get('input[name="password2"]').type(
      manageJenkinsSecurityCreateUser.password
    );
    cy.get('input[name="fullname"]').type(
      manageJenkinsSecurityCreateUser.fullName
    );
    cy.get('input[name="email"]').type(manageJenkinsSecurityCreateUser.email);
    cy.get('button[name="Submit"]').click();
    cy.get('.sortheader').contains('User ID').click();

    let arr = [];
    cy.get('.jenkins-table__link')
      .each(($el, i) => {
        arr[i] = $el.text();
      })
      .then(() => {
        let expectedResult = manageJenkinsSecurityCreateUser.expectedUserId;
        expectedResult = expectedResult.map((i) => i.toLowerCase()).sort();

        arr.reverse().map((el, i) => {
          expect(el.toLowerCase()).to.be.equal(expectedResult[i]);
        });
      });

    cy.get('a[data-url="user/johnkennedy/doDelete"]').pause().click();
  });
});
