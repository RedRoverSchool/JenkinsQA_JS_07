/// <reference types="cypress"/>

const randomName = Math.random().toString(36).substring(7);

describe('createPipelineProject', () => {

    it('TC_03.04.002 | Create Pipeline project', () => {
        cy.get("a[href='/view/all/newJob']").click();
        cy.get('#name').type(`NewJob${randomName}`);
        cy.get('.label').contains('Pipeline').click();
        cy.get('#ok-button').click();
        cy.url().should('include', `/NewJob${randomName}/configure`)

    })
})