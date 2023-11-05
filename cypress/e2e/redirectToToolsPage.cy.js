/// <reference types="cypress"/>

describe('redirectToToolsPage', () => {
    it('TC_09.06.006|Redirect to Tools page', () => {
        cy.visit('http://localhost:8080/manage/')
        cy.get(':nth-child(5) > .jenkins-section__items > :nth-child(2) > a').should('be.visible').click()
        
        cy.url().should('be.equal', 'http://localhost:8080/manage/configureTools/')
        cy.get('h1').should('exist')
    });
});