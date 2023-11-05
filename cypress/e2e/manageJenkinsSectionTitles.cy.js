/// <reference types="cypress"/>

describe('manageJenkinsSectionTitles', () => {
    it('Item > Manage Jenkins > Verify q-ty of section titles',()=>{
        cy.get(".task-link-wrapper > a[href='/manage']").click();

        cy.get('.jenkins-section__title').should('have.length', 5);
    });
});