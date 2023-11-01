/// <reference types="cypress"/
describe('Verify field', ()=>{
    beforeEach(()=>{
        cy.get('div.task:first-child').click();
    });
    it('TC_03.01.007| Verify field named “Enter an item name” is displayed', ()=>{
        cy.get('#name').should('be.visible');
    });
})