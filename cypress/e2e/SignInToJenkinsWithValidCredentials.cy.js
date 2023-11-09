/// <reference types="cypress"/>

const USERNAME = Cypress.env('local.admin.username');
const PASSWORD = Cypress.env('local.admin.password');

describe('Sign in to Jenkins', () => {

    it('Sign in to Jenkins with valid credentials', function() {
       cy.get('a[href = "/logout"]').click()
       cy.get('#j_username').type(USERNAME)
       cy.get('#j_password').type(PASSWORD)
       cy.get('button[type = "submit"]').click()
       cy.url().should('eq', `http://${LOCAL_HOST}:${LOCAL_PORT}`)
       cy.get('h1').should('have.text', 'Welcome to Jenkins!')
    })
})