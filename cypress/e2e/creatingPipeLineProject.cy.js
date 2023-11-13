/// <reference types="cypress"/>

describe('createPipelineProject', () => {
    beforeEach(function() {
        cy.fixture('creatingPipelineProject').then((projectInfo) => {
            this.projectInfo = projectInfo;
        }) 
    })

    it('TC_03.04.012 | New Item > Create Pipeline project', function() {
        cy.get('a[href = "/view/all/newJob"]').click()
        cy.get('input#name').type(this.projectInfo.projectName)
        cy.get('li[tabindex="0"]').contains('Pipeline').click()
        cy.get('#ok-button').click()
        cy.get('a[href="/"]').contains('Dashboard').click()
        cy.get('.jenkins-table__link').should('be.visible').and('have.text', this.projectInfo.projectName)

    })
})



