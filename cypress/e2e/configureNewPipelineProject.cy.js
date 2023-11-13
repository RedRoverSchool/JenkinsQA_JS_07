/// <reference types="cypress"/>

import createPipelineProject4 from"../fixtures/createPipelineProject4.json";
import newJobPage from"../fixtures/newJobPage.json";
import freestyleProject from"../fixtures/freestyleProject.json";

describe('configureNewPipelineProject', () => {

    beforeEach(() => {
        cy.get('a[href="newJob"]').click();
        cy.get('input#name').type(createPipelineProject4.newProjectName);
        cy.get('li[tabindex="0"] span').contains(newJobPage.expectedProjectLabels[1]).click();
        cy.get('#ok-button').click();
    });
    
    it('TC_03.05.002 | New Item > Create Pipeline Project > Configure new Pipeline project>Verify Enable/Disable the current project', () => {        
        cy.get('#toggle-switch-enable-disable-project').click();
        cy.wait(1000);       
        cy.get('button[formnovalidate = "formNoValidate"]').click();

        cy.get('#enable-project').should('contain','This project is currently disabled'); 
    });
    
    it('TC_03.05.010 | New Item > Create Pipeline Project > Configure new Pipeline project >Verify "Enable/Disable" switch toggle', () => {   
        cy.get('#toggle-switch-enable-disable-project').click();
        cy.get('.jenkins-toggle-switch__label__unchecked-title').should('contain',freestyleProject.statusDisabled);
        cy.get('#toggle-switch-enable-disable-project').click();
        cy.get('.jenkins-toggle-switch__label__checked-title').should('contain',freestyleProject.statusEnabled); 
    });
});
