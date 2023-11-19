/// <reference types="cypress"/>

import manageJenkinsSecurityCreateUser from '../fixtures/manageJenkinsSecurityCreateUser.json';

describe('ManageJenkinsSecurityCreateUser.cy', () => {
  beforeEach(function () {
    cy.get('a[href="/manage"]').click();
    cy.get('a[href="securityRealm/"]').click();
    cy.get('a[href="addUser"]').click();
  });

  it.skip('TC_09.14.001 | Manage Jenkins > Security> Create User using valid credentials', function () {
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
    cy.get(
      `a[href="user/${manageJenkinsSecurityCreateUser.username.toLocaleLowerCase()}/"]`
    ).should('have.text', manageJenkinsSecurityCreateUser.username);
  });

  it('TC_09.14.002 | Manage Jenkins > Security > Create user > Verify error message displayed when creating user without username', () => {
    cy.title().should('include', 'Create User');
    cy.get('#username').should('not.have.value');
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
    cy.get('div.error')
      .should('contain', '""')
      .and('contain', manageJenkinsSecurityCreateUser.errorUsername);
  });

  it('TC_09.14.003 | Manage Jenkins > Security> Verify error message displayed when user entered passwords that did not match', function () {
    cy.get('#username').type(manageJenkinsSecurityCreateUser.username);
    cy.get('input[name="password1"]').type(
      manageJenkinsSecurityCreateUser.password
    );
    cy.get('input[name="password2"]').type(
      manageJenkinsSecurityCreateUser.invalidPassword
    );
    cy.get('input[name="fullname"]').type(
      manageJenkinsSecurityCreateUser.fullName
    );
    cy.get('input[name="email"]').type(manageJenkinsSecurityCreateUser.email);
    cy.get('button[name="Submit"]').click();
    cy.get('div.error')
      .should('have.length', 2)
      .each(($el) => {
        expect($el.text()).to.include(
          manageJenkinsSecurityCreateUser.errorPasword
        );
      });
  });

  it('TC_09.14.004 |Manage Jenkins > Security> Create User > Verify Auto-Fill "Full Name" field with Username If the user leaves "Full name" field empty', function () {
    cy.get('#username').type(manageJenkinsSecurityCreateUser.username);
    cy.get('input[name="password1"]').type(
      manageJenkinsSecurityCreateUser.password
    );
    cy.get('input[name="password2"]').type(
      manageJenkinsSecurityCreateUser.password
    );
    cy.get('input[name="fullname"]').should('not.have.value');
    cy.get('input[name="email"]').type(manageJenkinsSecurityCreateUser.email);
    cy.get('button[name="Submit"]').click();
    cy.get('tbody > :nth-child(2) > :nth-child(3)').should(
      'have.text',
      manageJenkinsSecurityCreateUser.username
    );
  });

  it('TC_09.14.005 | Manage Jenkins > Security> Create User > Verify error message displayed when user did not enter the email', function () {
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
    cy.get('input[name="email"]').should('not.have.value');
    cy.get('button[name="Submit"]').click();
    cy.get('div.error').should(
      'have.text',
      manageJenkinsSecurityCreateUser.errorEmail
    );
  });
  it('TC_09.14.010 | Manage Jenkins > Security> Create User > Verify error message displayed when user enter invalid Username by using special characters', function () {
    cy.get('#username').type(
      JSON.stringify(manageJenkinsSecurityCreateUser.invalidUsername)
    );
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
    cy.get('div.error').should(
      'have.text',
      manageJenkinsSecurityCreateUser.errorUsernameSC
    );
  });
});
