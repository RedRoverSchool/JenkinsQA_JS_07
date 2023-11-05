/// <reference types="cypress"/

describe('Verify condition disable button', ()=>{
    beforeEach(()=>{
        cy.get('div.task:first-child').click();
    });
    it('Verify button', ()=>{
        if('#name:empty'){
            cy.get('#ok-button').should('be.disabled');
        }
    });
    });
    