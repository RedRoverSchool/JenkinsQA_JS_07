/// <reference types="cypress"/>

describe('verifyWelcomeMessage', () => {
    it("Text 'Welcome to Jenkins!' has attribute h1", () => {
        cy.get('div h1').should('have.text', 'Welcome to Jenkins!')
    })
})