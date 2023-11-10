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
});