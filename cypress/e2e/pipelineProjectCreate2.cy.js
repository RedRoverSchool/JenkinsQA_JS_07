/// <reference types="cypress"/>

describe('pipelineeProject', () => {

    it('TC_03.04.003 |Create Pipeline project', function() {
        cy.get('a[href="/view/all/newJob"]').click()
        cy.get('#name').type('NewProject')
        cy.get('.label').contains('Pipeline').click()
        cy.get('#ok-button').click()
        cy.url().should('include', '/job/NewProject/configure')
    })  
})