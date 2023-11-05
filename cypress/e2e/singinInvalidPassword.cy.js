/// <reference types="cypress"/>

const USERNAME = Cypress.env('local.admin.username');
const PASSWORD = Cypress.env('local.admin.password');
let invalidPassword = PASSWORD + "abc"

describe('singinInvalidPassword', () => {
    it('TC_01.01.001 | Sing in to Jenkins with invalid password', function () {
        cy.get('a[href="/logout"]').click();
        cy.get('#j_username').type(USERNAME);
        cy.get('input[name="j_password"]').type(invalidPassword);
        cy.get('button[name="Submit"]').click();

        cy.get('.app-sign-in-register__error').should('be.visible').and('have.text', 'Invalid username or password');
    })

    it("TC_01.01.002 | Validate after leaving empty fields and clicking 'Sign in' button an error mesagge appeares", () => {
        cy.get("a[href='/logout']").click();
        cy.get(".jenkins-button.jenkins-button--primary").click();
        cy.get(".app-sign-in-register__error").should('have.text', 'Invalid username or password');
    })
  })
  




