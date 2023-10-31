/// <reference types = "cypress"/>>

describe('createPipelineProject6', ()=> {
    it('TC_03.04.006 | Create Pipeline project', ()=>{
      cy.get('div.task:first-child').click();  
      cy.get('span.label').contains('Pipeline').click();
      cy.get('#name').type('Project111');
      cy.get('#ok-button').click();
      cy.url().should('contain', 'http://localhost:8080/job/Project111/configure');

    });
});