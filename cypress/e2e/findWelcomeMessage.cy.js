/// <reference types="cypress"/>

describe('findWelcomeMessage',() => {
    it("findWelcomeMessage", () => {
        cy.get('.empty-state-block h1').should('be.visible').and('have.text','Welcome to Jenkins!')
    }) 
})