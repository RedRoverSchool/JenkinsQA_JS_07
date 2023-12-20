import {ErrorMessage} from "../../fixtures/Project_test_data/01.01_SignIn_to_Jenkins.json"

const localhost = Cypress.env("local.host")
const localport = Cypress.env("local.port")

describe('01.01_SignIn_to_Jenkins_invalidCred', () => {
    it('invalid credentials', () => {
        cy.visit(`http://${localhost}:${localport}/login`)
        cy.get('#j_username').type('b')
        .get('#j_password').type('a')
        .get('.jenkins-button--primary').click()
        .get('.app-sign-in-register__error').invoke('text').should('to.eql', ErrorMessage)
    });
});