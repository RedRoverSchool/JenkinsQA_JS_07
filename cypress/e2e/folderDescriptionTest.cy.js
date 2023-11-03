/// <reference types="cypress"/>

describe('folder description test TC_07.02.001', () => {

    it('folder description test', function () {
        cy.visit('http://localhost:8080/view/all/newJob')
        cy.get('#name').type('my_folder')
        cy.get('.com_cloudbees_hudson_plugins_folder_Folder').click()
        cy.get('#ok-button').click()
        cy.get('a[href="/job/my_folder/"]').click()
        
        cy.get('#description').should('have.value', '')
        cy.get('#description-link').should('be.visible')
        cy.contains('#description-link', 'Add description')

    })

})