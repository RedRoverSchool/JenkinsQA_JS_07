/// <reference types="cypress"/>

const port = Cypress.env('local.port');
const host = Cypress.env('local.host');
const validUserName = Cypress.env('local.admin.username');
const validUserPass = Cypress.env('local.admin.password');
const baseUrl = `http://${host}:${port}`

describe('Log in to Jenkins',() => {
    beforeEach(() => {
        cy.visit(`${baseUrl}/login`)
    })
    it('TC_01.01.004 | Sign in to Jerkins > Sign in with valid credentials',() => {
        cy.get('#j_username').type(validUserName)
        cy.get('#j_password').type(validUserPass)
        cy.get('#remember_me').check({ force: true })
        cy.get('.jenkins-button').click()
        cy.get('#jenkins-home-link').should('be.visible')
        cy.url().should('be.equal',`${baseUrl}/`)
    });
});