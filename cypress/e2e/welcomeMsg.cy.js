///<reference types ="cypress"/>

describe('welcomeMsg', () => {

    it('TC_02.03.10 | Dashboard Welcomed message', function (){

        cy.get('h1').should('be.visible').and('have.text', 'Welcome to Jenkins!')
        cy.get('div.empty-state-block p').should('exist').and('contain.text', 'This page is where your Jenkins jobs will be displayed.')

    })
})