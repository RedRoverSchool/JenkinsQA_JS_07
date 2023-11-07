/// <reference types="cypress"/>

describe('startBuildingYourSoftwareProjectTest',() => {
    it('TC_02.06.001 |Block “Start building your software project” > Verify "Start building your software project” is displayed',() => {
        cy.get('h2.h4').should('be.visible');
    });

    it('TC_02.06.003 | Block "Start building your software project" > Option “Create a job” leads to the page “New Job”',() => {
        cy.get('a[href="newJob"]').click()
        cy.url().should('include','/newJob')
        cy.get('.h3').should('be.visible').and('have.text','Enter an item name')
    });
})
