/// <reference types="cypress"/>

// Steps:
// Click the “New Item” title in the side bar menu
// Input the “NewProject” into the “Enter an item name” field
// Seleck the “Pipline” in the list below and click.
// Click the “OK” button
// Click on “Dashboard" in Breadcrumbs
// Expected results:
// User is redirected to the Dashboad page. The name “NewProject” is displayed in the list of jobs

describe('pipelineeProject', () => {

    it('TC_03.04.003 |Create Pipeline project', function() {
        cy.get('a[href="/view/all/newJob"]').click()
        cy.get('#name').type('NewProject')
        cy.get('.label').contains('Pipeline').click()
        cy.get('#ok-button').click()
        cy.url().should('include', '/job/NewProject3/configure')
    })

        
})