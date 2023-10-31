/// <reference types="cypress"/>

import manageJenkinsSecurityCreateUser from '../fixtures/manageJenkinsSecurityCreateUser.json';

describe('ManageJenkinsSecurityCreateUser.cy', () => {
  it('TC_09.14.001 | Manage Jenkins > Security> Create User using valid credentials', function () {
    cy.get('a[href="/manage"]').click();
    cy.title().should('include', 'Manage Jenkins');
    cy.get('a[href="securityRealm/"]').click();
    cy.title().should('include', 'Users');
    cy.get('a[href="addUser"]').click();
    cy.title().should('include', 'Create User');
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
    cy.get('a[href="user/johnkennedy/"]').should(
      'have.text',
      manageJenkinsSecurityCreateUser.username
    );
  });
});
