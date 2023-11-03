/// <reference types="cypress"/>

const nameProject = "firstPipelineProject"

describe('createPipelineProjectNewItem', () => {

    it('TC_03.04.005 | Create Pipeline project > Not unique name > Inactive button', () => {
        cy.visit('http://localhost:8080/')
        cy.get("a[href='/view/all/newJob']").click()
        cy.get('input#name').type(nameProject)
        cy.get('li[tabindex="0"] span').contains('Pipeline').click()
        cy.get('#ok-button').click()
        cy.get('a[href="/"].model-link').click()
        cy.get("a[href='/view/all/newJob']").click()
        cy.get('input#name').type(nameProject)
        cy.get('li[tabindex="0"] span').contains('Pipeline').click()
        cy.get('#ok-button').should('be.disabled')
    })
    
})
