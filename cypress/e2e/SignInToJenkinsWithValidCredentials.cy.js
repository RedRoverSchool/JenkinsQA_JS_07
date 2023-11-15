/// <reference types="cypress"/>

import welcomeMessage from "../fixtures/WelcomeToJenkins.json"
const USERNAME = Cypress.env('local.admin.username');
const PASSWORD = Cypress.env('local.admin.password');
const LOCAL_PORT = Cypress.env('local.port');
const LOCAL_HOST = Cypress.env('local.host');

describe('Sign in to Jenkins', () => {

    it('TC_01.01.003 | Sign in to Jenkins with valid credentials', function() {
       cy.get('a[href = "/logout"]').click()
       cy.get('#j_username').type(USERNAME)
       cy.get('#j_password').type(PASSWORD)
       cy.get('button[type = "submit"]').click()
       cy.url().should('eq', `http://${LOCAL_HOST}:${LOCAL_PORT}/`)
       cy.get('h1').should('have.text', welcomeMessage.mainPageTitle)
    })
})