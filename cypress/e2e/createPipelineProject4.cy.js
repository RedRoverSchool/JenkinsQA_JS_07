/// <reference types="cypress"/>

describe('createPipelineProject', () => {

  it('TC_03.04.004 | Create Pipeline project4', () => {
      cy.get("a[href='/view/all/newJob']").click();
      cy.get('#name').type(`Pipeline project4`);
      cy.get('.label').contains('Pipeline').click();
      cy.get('#ok-button').click();
      cy.get('#breadcrumbs > li:nth-child(1) > a').click();
      cy.get('td:nth-child(3) > a > span').should('have.text', 'Pipeline project4')

  })
})