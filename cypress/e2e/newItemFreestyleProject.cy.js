/// <reference types="cypress" />

describe('newItemFreestyleProject', () => {
   
    it('New Item > Create Freestyle Project', () => {
        
        cy.get('a[href="/view/all/newJob"]').click()
        cy.url().should('include', 'view/all/newJob')
        cy.get('#name').should('have.focus')
   
        cy.get('#search-box').click()
        cy.get('#itemname-required').should('include.text', 
        'This field cannot be empty, please enter a valid name')
        .and('have.css', 'color', 'rgb(255, 0, 0)')

        cy.get('#name').type('Project 1')
        .should('have.value', 'Project 1')
        cy.get('#itemname-required').should('not.be.visible')

        cy.get('li.hudson_model_FreeStyleProject').click()
        .should('have.class', 'active')
        
        cy.get('#ok-button').should('be.enabled').click()
        cy.url().should('include', 'configure')

    })

})