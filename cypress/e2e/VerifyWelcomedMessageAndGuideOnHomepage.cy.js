/// <reference types = "cypress"/>

const welcomeMessage = 'Welcome to Jenkins!'
const quideMessage = 'This page is where your Jenkins jobs will be displayed. To get started, you can set up distributed builds or start building a software project.'

describe ('Verify welcomed message', () => {
    it('Verify welcomed message and quick guide on homepage', function() {
        cy.get('h1').should('be.visible')
        cy.get('h1').should('have.text', welcomeMessage)
        cy.get('p').should('be.visible')
        cy.get('p').should('have.text', quideMessage)
    })
})