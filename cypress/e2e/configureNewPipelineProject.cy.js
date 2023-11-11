/// <reference types="cypress"/>

import createPipelineProject4 from"../fixtures/createPipelineProject4.json";
import newJobPage from"../fixtures/newJobPage.json";

describe('configureNewPipelineProject', () => {

    beforeEach(() => {
        cy.get('a[href="newJob"]').click();
        cy.get('input#name').type(createPipelineProject4.newProjectName);
        cy.get('li[tabindex="0"] span').contains(newJobPage.expectedProjectLabels[1]).click();
        cy.get('#ok-button').click();
    })
    
    it('TC_03.05.002 | New Item > Create Pipeline Project > Configure new Pipeline project>Verify Enable/Disable the current project', () => {        
        cy.get('#toggle-switch-enable-disable-project').click();       
        cy.get('button[formnovalidate = "formNoValidate"]').click();

        cy.get('#enable-project').should('contain','This project is currently disabled'); 
    });        
});
