/// <reference types = 'cypress' />

describe('TC_03.13.09 I Verify Logo and Title of Jenkins', () => {
    it('Cheking Header', () => {
    cy.get('img#jenkins-name-icon').should('be.visible');
    cy.get('#jenkins-name-icon').click();
    cy.contains('').should('be.visible');
    });
});

