/// <reference types="cypress"/>

describe('Manage Jenkins > Verify Title', () => {
    it('Verify the Title of the Manage Jenkins page ', () => {
        cy.get('.task-link-wrapper  > a[href="/manage"]').click()

        cy.get(' .jenkins-app-bar__content h1').should('be.visible')
        .and('have.text', 'Manage Jenkins');
    })
})