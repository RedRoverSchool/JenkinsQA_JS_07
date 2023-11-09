/// <reference types="cypress"/>

describe('open Configure a Cloud', () => {
    it('US_02.08.004 | Dashboard -> Block “Set up a distributed build” -> "Configure a cloud" opens', () => {
        cy.get('#main-panel > div:nth-child(3) > div > section:nth-child(4) > h2')
            .should('have.text', 'Set up a distributed build');
  
        cy.get('a[href="computer/new"]').should('be.visible');
        cy.get('a[href="cloud/"]').should('be.visible');
        cy.get('a[href="https://www.jenkins.io/redirect/distributed-builds"]').should('be.visible');

        cy.get('a[href="cloud/"]').click();

        cy.get('.jenkins-app-bar__content').should('have.text', 'Clouds');
        
    });
});