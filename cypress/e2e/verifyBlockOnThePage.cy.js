/// <reference types="cypress"/>

describe('Verify block on the page', () =>{

    it('TC_02.06.001 |Block “Start building your software project” > Verify "Start building your software project” is displayed', ()=>{
cy.get('h2.h4').should('be.visible');
    });
});