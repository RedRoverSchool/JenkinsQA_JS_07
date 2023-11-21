/// <reference types="cypress"/>

describe.skip('verifyingWelcomeText', () => {
    it('TC_02.03.011 |  Verify the "Welcome to Jenkins!" title', () => {
        cy.get('div.empty-state-block h1').should('have.text', 'Welcome to Jenkins!');
    })


})