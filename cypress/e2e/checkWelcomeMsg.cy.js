/// <reference types='cypress'/>

const PORT = '8080'

describe('checkWelcomeMsg', () => {
  it('TC_02.03.018 | Dashboard > Welcome message', () => {
    const expectedUrl = `http://localhost:${PORT}/`;
    cy.url().should('be.equal', expectedUrl)
    cy.fixture('../fixtures/dashboardWelcomedMessage.json').then((dashboardWelcomedMessage) => {
      cy.get('h1').should('be.visible').should('have.text', dashboardWelcomedMessage.pageTitle)
      cy.get('h1').next('p').should('be.visible').should('have.text', dashboardWelcomedMessage.belowTitle)
    })
  });
});