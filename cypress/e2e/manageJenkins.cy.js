/// <reference types="cypress"/>

import { randomUserName, randomPassword, randomFullName, randomEmail } from '../fixtures/manageJenkinsCreatUserRandom';

describe('creatNewUser', () => {
  it('TC_09.14.003 | Manage Jenkins > Security> Create User', () => {

    cy.get('a[href="/manage"]').click()
    cy.get('a[href="securityRealm/"]').click()
    cy.get('.jenkins-button.jenkins-button--primary').click()

    cy.get('#username').type(randomUserName);
    cy.get('input[name="password1"]').type(randomPassword);
    cy.get('input[name="password2"]').type(randomPassword);
    cy.get("input[name='fullname']").type(randomFullName);
    cy.get("input[name='email']").type(randomEmail);

    cy.get("button[name='Submit']").click();

    cy.get('#people')
      .invoke('text')
      .then((text) => {
        expect(text).to.contain(randomFullName);
      });
  });
});