///<reference types ="cypress"/>

describe('welcomeJenkinsTest', () => {

    it('TC_02.03.004 | "Welcome to Jenkins" title and text', function () {

        cy.get('h1').should('be.visible').and('have.text', 'Welcome to Jenkins!');
        cy.get('div.empty-state-block p').should('exist').and('contain', 'This page is where your Jenkins jobs will be displayed.')

    });

})