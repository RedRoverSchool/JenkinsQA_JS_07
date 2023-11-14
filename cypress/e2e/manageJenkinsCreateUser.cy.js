/// <reference types="cypress"/>

import manageJenkinsCreateUserData from "../fixtures/manageJenkinsCreateUser.json"

describe(" Manage Jenkins > Security> Create User", () => {
    
    beforeEach(() => {
        cy.get("#tasks div.task")
          .contains(manageJenkinsCreateUserData.manageJenkinsLinkText)
          .click();
        cy.get("div.jenkins-section__item a[href='securityRealm/']").click();
        cy.get("a[href='addUser']").click();
    });

    it("TC_09.14.007 | Manage Jenkins  Security Create User  Verify error messages are displayed if the fields are not filled", () => {
        cy.get("button[name='Submit']").click();

        cy.get("div.error").then(($els) => { 
            const errorMessages = Cypress.$.makeArray($els).map(
              ($els) => $els.innerText
            );
               expect(errorMessages).to.be.deep.equal(
              manageJenkinsCreateUserData.errorMessagesExpected
            );
        })
    });

  it('TC_09.14.009 | Manage Jenkins > Security> Create User > Verify created User on the "Users [Jenkins]" page', () => {
    cy.get("#username").clear().type(manageJenkinsCreateUserData.userCredentials.Username);
    cy.get("input[name='password1']")
      .clear()
      .type(manageJenkinsCreateUserData.userCredentials.Password);
    cy.get("input[name='password2']")
      .clear()
      .type(manageJenkinsCreateUserData.userCredentials.ConfirmPassword);
    cy.get("input[name='fullname']").clear().type(manageJenkinsCreateUserData.userCredentials.FullName);
    cy.get("input[name='email']").clear().type(manageJenkinsCreateUserData.userCredentials["E-mailAddress"]);
    cy.get("button[name='Submit']").click();

    cy.get("#people a")
      .contains(manageJenkinsCreateUserData.userCredentials.Username)
      .should("be.visible")
      .and("have.text", manageJenkinsCreateUserData.userCredentials.Username);
  });
});