/// <reference types="cypress"/>

describe('mcProject', () => {

    it('Create Multiconfiguration project', function() {
        cy.get('a[href="newJob"]').click()
        cy.get('.jenkins-input').type('Project 1')
        cy.get('li.hudson_matrix_MatrixProject').click()
        cy.get('#ok-button').click()
        cy.get('.jenkins-button--primary').click()
        cy.get('.matrix-project-headline').should('be.visible', 'Project Project1')
        cy.visit('http://localhost:8080/')

        cy.get('.jenkins-table__link').should('have.text', 'Project 1')
   })
})
