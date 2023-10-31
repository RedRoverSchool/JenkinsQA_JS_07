/// <reference types="cypress"/>

describe('clickNewItem', () => {
    it('TC_03.01.006 | Click New Item',()=>{
        cy.get('div.task:first-child').click(); 
       cy.url().should('be.eql','http://localhost:8080/view/all/newJob');
    });
});