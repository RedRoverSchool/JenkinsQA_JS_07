/// <reference types = 'cypress' />

describe('Test suite', () => {
    it('training Test', () => {
     cy.visit('https://demoqa.com/');
     cy.get('div.card:first-child').click();
     //cy.get('div.main-header').should('be.visible').and('have.text','Elements');
     cy.get('div.main-header').then(($el) => {
     cy.log($el);
     console.log($el)
       })
    });
 });
