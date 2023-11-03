///<reference types ="cypress"/>

describe('WelcomeToJenkins.cy', () => {

    it("TC_02.03.012 | Dashboard > 'Welcome to Jenkins' verification", () => {

        cy.get('.empty-state-block h1')
        .should('be.visible')
        .and('have.text', 'Welcome to Jenkins!')
        .invoke('attr', '<h1>');

        cy.get('.empty-state-block p')
        .should('be.visible')
        .and('have.text', 'This page is where your Jenkins jobs will be displayed. To get started, you can set up distributed builds or start building a software project.')
        
    })
})