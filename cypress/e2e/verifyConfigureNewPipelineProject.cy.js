/// <reference types="cypress"/>

import newProjectName from "../fixtures/createPipelineProject4.json"
describe('configurePipelineProject', function() {
    
        beforeEach('Create a New Pipeline Project',() => {
            cy.get("a[href='/view/all/newJob']").click()
            cy.get("label[for='name']").should('have.text',"Enter an item name")
            cy.get("#name").type(newProjectName.newProjectName)
            cy.get('li[tabindex="0"] span').contains('Pipeline').click()
            cy.get("#ok-button").click()
            cy.get('.jenkins-app-bar__content > h1').should('have.text','Configure')
        })
    
        it('TC_03.05.007 | New Item > Create Pipeline Project > Configure new Pipeline project > Verify "General" button color and heading',() =>{
           cy.get("button[data-section-id='general']").click();
           cy.get("button[data-section-id='general']").should('have.class','task-link task-link--active');
           cy.get("#general").should("have.text","General");
        })
    
        
    });