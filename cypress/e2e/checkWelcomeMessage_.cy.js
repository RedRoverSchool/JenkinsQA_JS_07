/// <reference types="cypress"/>

describe('checkWelcomeMessage',() => {
    it("checkWelcomeMessage", () => {
        cy.get('.empty-state-block h1').should('be.visible').and('have.text','Welcome to Jenkins!')
    })
})