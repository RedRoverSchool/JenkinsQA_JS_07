const USERNAME = Cypress.env('local.admin.username');
const PASSWORD = Cypress.env('local.admin.password');
const PORT = Cypress.env('local.port');
const HOST = Cypress.env('local.host') || 'localhost';

beforeEach(() => {
    cy.cleanData();
    cy.visit(`http://${HOST}:${PORT}/login`);
      cy.get('#j_username').type(USERNAME);
      cy.get('input[name="j_password"]').type(PASSWORD);
      cy.get('button[name="Submit"]').click();
})