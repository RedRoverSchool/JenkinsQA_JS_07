/// <reference types="cypress"/>

import { loginErrorMessage } from "../fixtures/loginToJenkins.json"

const port = Cypress.env('local.port');
const host = Cypress.env('local.host');
const validUserName = Cypress.env('local.admin.username');
const validUserPass = Cypress.env('local.admin.password');
const baseUrl = `http://${host}:${port}`
let wrongUserName = Math.random().toString(36).substring(7)
let wrongPassword = Math.random().toString(36).substring(7)

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

    it('TC_01.01.005 | Sign in to Jerkins > Sign in with invalid userName',() => {
        cy.get('#j_username').type(wrongUserName)
        cy.get('#j_password').type(validUserPass)
        cy.get('#remember_me').check({ force: true })
        cy.get('.jenkins-button').click()
        cy.get('.app-sign-in-register__error').should('be.visible').and('have.text',loginErrorMessage)
        cy.url().should('be.equal',`${baseUrl}/loginError`)
    });

    it('TC_01.01.006 | Sign in to Jerkins > Sign in with invalid password', () => {
        cy.get('#j_username').type(validUserName)
        cy.get('#j_password').type(wrongPassword)
        cy.get('button.jenkins-button').click()
        cy.get('.app-sign-in-register__error').should('be.visible').and('have.text', loginErrorMessage)
    });
});