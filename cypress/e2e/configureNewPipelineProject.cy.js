/// <reference types="cypress"/>

describe('configureNewPipelineProject', () => {

    beforeEach(() => {
        cy.get('a[href="newJob"]').click()
            cy.get('input#name').type('Pipeline Project1')
            cy.get('li[tabindex="0"] span').contains('Pipeline').click()
            cy.get('#ok-button').click()
    });
    
    it('TC_03.05.002 | New Item > Create Pipeline Project > Configure new Pipeline project>Verify Enable/Disable the current project', () => {
        
        cy.get('#toggle-switch-enable-disable-project').click();       
        cy.wait(1000);
        cy.get('button[formnovalidate = "formNoValidate"]').click();

        cy.get('#enable-project').should('have.text','\n          This project is currently disabled\n          \n    Enable\n  '); 
    });      
});
