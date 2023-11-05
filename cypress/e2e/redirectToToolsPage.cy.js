/// <reference types="cypress"/>

describe('redirectToToolsPage',() => {
    it('TC_09.06.006|Redirect to Tools page',() => {
        cy.get('a[href="/manage"]').click()
        
        cy.get('a[href="configureTools"]').click()
        cy.url().should('include','/manage/configureTools/')
        cy.get('h1').should('be.visible').and('have.text','Tools')
    });
});