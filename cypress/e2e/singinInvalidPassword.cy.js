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
  })
  




