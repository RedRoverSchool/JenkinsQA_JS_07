/// <reference types ="cypress"/>

let welcomeMessage = 'Welcome to Jenkins!';
let additionalInfo = 'This page is where your Jenkins jobs will be displayed. To get started, you can set up distributed builds or start building a software project.'

describe('welcomeMessageDashboard', () => {
    it('TC_02.03.020 | Dashboard > Welcomed message', function () {
        cy.get('h1').should('be.visible').and('have.text', welcomeMessage)
        cy.get('p').should('have.text', additionalInfo)

    })
})