
import {WelcomeMessage} from "../fixtures/01.01_SignIn_to_Jenkins.json"
import {ErrorMessage} from "../fixtures/01.01_SignIn_to_Jenkins.json"

const username = Cypress.env("local.admin.username")
const password = Cypress.env("local.admin.password")
const localhost = Cypress.env("local.host")
const localport = Cypress.env("local.port")

describe('01.01_SignIn_to_Jenkins: valid', () => {
  beforeEach('base url',() => {
    cy.visit(`http://${localhost}:${localport}/login`)
  });

    it('valid credentials', () => {
        cy.get('#j_username').type(username)
        .get('#j_password').type(password)
        .get('.jenkins-button--primary').click()
        .url().should('to.eql', `http://${localhost}:${localport}/`)
        .get('.empty-state-block h1').invoke('text').should('to.eql', WelcomeMessage)
    });

    it('invalid credentials', () => {
        cy.get('#j_username').type(username)
        .get('#j_password').type('a')
        .get('.jenkins-button--primary').click()
        .get('.app-sign-in-register__error').invoke('text').should('to.eql', ErrorMessage)
    });
    
});