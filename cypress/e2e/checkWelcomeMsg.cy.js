/// <reference types='cypress'/>

import dashboardWelcomedMessage from '../fixtures/dashboardWelcomedMessage.json'

describe('checkWelcomeMsg', () => {
  it('TC_02.03_018 | Dashboard > Welcome message', () => {
    cy.url().should('be.equal', 'http://localhost:8080/')
    cy.get('h1').should('be.visible').should('have.text', dashboardWelcomedMessage.pageTitle)
    cy.get('h1').next('p').should('be.visible').should('have.text', dashboardWelcomedMessage.belowTitle)
    });
});
