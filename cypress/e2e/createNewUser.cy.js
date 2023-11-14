/// <reference types="cypress"/>

import user from '../fixtures/newUser.json'

describe('CreateNewUser', () => {
    beforeEach(() => {
            const baseUrl = `http://${Cypress.env("local.host")}:${Cypress.env("local.port")}`

    });

    it('TC_09.14.008 | Manage Jenkins > Security> Create User with valid input', () => {
        cy.visit('http://localhost:8080/securityRealm/addUser')
        cy.get('#username').type(user.name)
        cy.get('input[name="password1"]').type(user.password)
        cy.get('input[name="password2"]').type(user.password)
        cy.get('input[name="fullname"]').type(user.fullName)
        cy.get('input[name="email"]').type(user.email)
        cy.get('button[name="Submit"]').click()

        cy.get('#main-panel h1').should('have.text', 'Users')
        cy.get('#people').contains(user.name).and('is.visible')
    });
});