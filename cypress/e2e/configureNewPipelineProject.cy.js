/// <reference types="cypress"/>

describe('configureNewPipelineProject', () => {
    it.skip('TC_03.05.002 | New Item > Create Pipeline Project > Configure new Pipeline project>Verify Enable/Disable the current project', () => {
        
        cy.get('a[href="newJob"]').click()
        cy.get('input#name').type('Pipeline Project1')
        cy.get('li[tabindex="0"] span').contains('Pipeline').click()
        cy.get('#ok-button').click()
        cy.get('.jenkins-breadcrumbs__list-item:nth-child(1) > .model-link').click()

        cy.get('.jenkins-table__link.model-link.inside button').realHover().realClick();
        cy.get('.jenkins-dropdown__item:nth-child(3) ').click();
        cy.get('#toggle-switch-enable-disable-project').click();
        cy.wait(1000);
        cy.get('button[formnovalidate = "formNoValidate"] ').click();

        cy.get('#enable-project').should('have.text','\n          This project is currently disabled\n          \n    Enable\n  ');    
    });       
});
