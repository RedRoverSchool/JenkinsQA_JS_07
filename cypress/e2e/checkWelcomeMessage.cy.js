/// <reference types="cypress"/>

describe('checkWelcomeMessage',() => {
    it("check if 'Welcome to Jenkins!' has attribute h1", () => {
        cy.get('.empty-state-block h1').should('be.visible').and('have.text','Welcome to Jenkins!')
    })

    it("check if 'User can see the below title", () => {
        cy.get('.empty-state-block p').should('be.visible').and('have.text','This page is where your Jenkins jobs will be displayed. To get started, you can set up distributed builds or start building a software project.')
    })
})