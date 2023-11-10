/// <reference types = "cypress"/>

const LOCAL_PORT = Cypress.env('local.port');
const LOCAL_HOST = Cypress.env('local.host');

describe ('Verify Jenkins Logo', () => {

    it ('TC_02.02.008 | Verify Jenkins Logo and Title on welcome page is visible and clickable', function() {
        cy.get('#jenkins-name-icon').should('be.visible')
        cy.get('#jenkins-name-icon').should('have.attr', 'src')
        cy.get('#jenkins-name-icon').click
        cy.url().should('eq', `http://${LOCAL_HOST}:${LOCAL_PORT}/`)
        cy.get('h1').should('have.text', 'Welcome to Jenkins!')
    })
})