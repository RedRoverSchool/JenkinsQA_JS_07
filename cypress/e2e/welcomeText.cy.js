///<reference types ="cypress"/>

describe('welcomeText', () => {
    
    it('verify Welcome to Jenkins massage', function () {
        cy.get('.empty-state-block h1').should('be.visible').and('have.text', 'Welcome to Jenkins!')
    }) 
    it('verify Explenation text', function () {
        cy.get('.empty-state-block p').should('be.visible').and('have.text', 'This page is where your Jenkins jobs will be displayed. To get started, you can set up distributed builds or start building a software project.')
    }) 
})