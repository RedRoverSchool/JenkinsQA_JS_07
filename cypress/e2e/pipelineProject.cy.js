/// <reference types="cypress"/>

describe('pipelineProject', () => {

    it('New Item > Create Pipeline project', function () {
        cy.get('a[href = "/view/all/newJob"]').click()
        cy.get('input#name').type('firstProject')
        cy.get('li[tabindex="0"]').contains('Pipeline').click()
        cy.get('#ok-button').click()
        cy.get('a[href="/"]').contains('Dashboard').click()
        cy.get('a[href="job/firstProject/"]').contains('firstProject').should('be.visible')
        cy.get('a[href="job/firstProject/"]').contains('firstProject').should('have.text', 'firstProject')

    })
})