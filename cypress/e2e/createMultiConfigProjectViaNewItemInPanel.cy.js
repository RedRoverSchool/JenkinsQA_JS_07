/// <reference types="cypress"/>

describe('createMultiConfigProjectViaNewItemInPanel', () => {

    it('Create Multiconfiguration project by clicking "+ New item" in the left panel', function() {
        cy.get('a[href="newJob"]').click()
        cy.get('input#name').type('Test 1')
        cy.get('li[tabindex="0"] span').contains('Multi-configuration project').click()
        cy.get('#ok-button').click()
        cy.get('button[name="Submit"]').click()
       
    
        cy.get('.matrix-project-headline.page-headline').should('have.text', 'Project Test 1')
   })
})