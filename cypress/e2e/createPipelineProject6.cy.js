/// <reference types = "cypress"/>>

// Click “+New item” and be redirected to http://localhost:8080/view/all/newJob
// Enter a name of the project into field "Enter an item name"
// The name must be unique, spaces between words are not allowed
// Click Pipeline section
// Click OK button and be redirected to http://localhost:8080/job/<project name>/configure page

describe('createPipelineProject6', ()=> {
    it('TC_03.04.006 | Create Pipeline project', ()=>{
      cy.get('div.task:first-child').click();  
      cy.get('span.label').contains('Pipeline').click();
      cy.get('#name').type('Project111');
      cy.get('#ok-button').click();
      cy.url().should('contain', 'http://localhost:8080/job/Project111/configure');

    });
});