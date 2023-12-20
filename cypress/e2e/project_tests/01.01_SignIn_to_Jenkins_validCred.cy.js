
import {WelcomeMessage} from "../../fixtures/Project_test_data/01.01_SignIn_to_Jenkins.json"

const username = Cypress.env("local.admin.username")
const password = Cypress.env("local.admin.password")
const localhost = Cypress.env("local.host")
const localport = Cypress.env("local.port")

describe('01.01_SignIn_to_Jenkins: valid credentials', () => {

    it('valid credentials', () => {
        cy.get('.empty-state-block h1').invoke('text').should('to.eql', WelcomeMessage)
    });
    
});