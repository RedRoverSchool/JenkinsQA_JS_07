/// <reference types="cypress"/>

describe('mcProject', () => {

    beforeEach(function() {
        cy.fixture('projectData').then((data) => {
            this.projectInfo = data.projectData;
        })
    })

   it('Create Multiconfiguration project', function() {
        cy.get('a[href="newJob"]').click()
        cy.get('.jenkins-input').type(this.projectInfo.projectName)
        cy.get('li.hudson_matrix_MatrixProject').click()
        cy.get('#ok-button').click()
        cy.get('.jenkins-button--primary').click()
        cy.get('.matrix-project-headline').should('be.visible')
        cy.get('#jenkins-home-link').click()
        
        cy.get('.jenkins-table__link').should('have.text', this.projectInfo.projectName)
   })
})
