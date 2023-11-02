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

    //***Delete user using dropdown menu by clicking on Confirm Pop-up window click on "Ok"************
    cy.wait(2000);
    cy.get('a[href="user/johnkennedy/"] button').click({ force: true });
    cy.get('button[href="/user/johnkennedy/doDelete"]').click();
    cy.on('window:confirm', (str) => {
      expect(str).to.eql('Delete: are you sure?');
    });
    cy.get('a[href="/manage"]').click();
    cy.get('a[href="securityRealm/"]').click();
    cy.get('a[href="user/johnkennedy/"] button').should('not.exist');

    //***Delete user using delete button**************
    //cy.wait(2000);
    //cy.get('a[data-url="user/johnkennedy/doDelete"]').click();
  });

  it('Manage Jenkins > Security > Create user > Verify error message displayed when creating user without username', () => {
    cy.get('a[href="/manage"]').click();
    cy.title().should('include', 'Manage Jenkins');
    cy.get('a[href="securityRealm/"]').click();
    cy.title().should('include', 'Users');
    cy.get('a[href="addUser"]').click();
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
});
