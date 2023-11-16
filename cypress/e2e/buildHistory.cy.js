/// <reference types="cypress"/>
import createFreestyleProject from "../fixtures/createFreestyleProject.json";
describe('Build History',()=>{
    it('TC_04.07.001 | Freestyle > Build History > Verify see name project in build history calendar', () => {  
        cy.get('#side-panel [href$=newJob]').click();             
        cy.get('form#createItem input[id=name]').type(createFreestyleProject.newProjectName);
        cy.get('#items .category [class$=FreeStyleProject]').click();
        cy.get('#ok-button').click();
        cy.get('button[name=Submit]').click();
        cy.get('#main-panel .page-headline').should('contain', createFreestyleProject.newProjectName)  
        cy.get('#jenkins-home-link').click();                                       
        cy.get('td:last-child [tooltip]').click();        
        cy.get('a[href="/view/all/builds"]').click();
        cy.get('#icon-tl-0-1-e1').click();
        cy.get('div.timeline-event-bubble-title a').should('contain', createFreestyleProject.newProjectName)
         
    });
})
