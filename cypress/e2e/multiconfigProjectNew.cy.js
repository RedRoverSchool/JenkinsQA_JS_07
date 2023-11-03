/// <reference types="cypress"/>

describe('multiconfigProjectNew', () => {

    it('Create Multiconfiguration project', function() {
        cy.get('a[href="newJob"]').click()
        cy.get('.jenkins-input').type('Project 1')
        cy.get('li.hudson_matrix_MatrixProject').click()
        cy.get('#ok-button').click()
        cy.get('.jenkins-button--primary').click()
        cy.get('.matrix-project-headline').should('be.visible', 'Project Project1')
        cy.visit('http://localhost:8080/')
   })
})
