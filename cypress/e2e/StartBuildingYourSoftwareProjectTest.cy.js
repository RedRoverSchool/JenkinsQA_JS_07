/// <reference types="cypress"/>

const PORT = Cypress.env('local.port');

describe('StartBuildingYourSoftwareProjectTest', () =>{
 
    it('TC_02.06.001 |Block “Start building your software project” > Verify "Start building your software project” is displayed', ()=>{
cy.get('h2.h4').should('be.visible');
    });
    it('TC_02.06.004 |Block “Start building your software project” >Check redirect to the page "New Job"', ()=>{

        cy.get('a[href="newJob"]').click();
        cy.url().should('be.eql',`http://localhost:${PORT}/newJob`);
        });
});
