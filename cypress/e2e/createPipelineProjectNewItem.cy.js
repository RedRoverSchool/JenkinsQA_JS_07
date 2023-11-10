/// <reference types="cypress"/>

let nameProject= "firstPipelineProject"

describe('createPipelineProjectNewItem', () => {

    it.skip('TC_03.04.008 | Create Pipeline project > Not unique name > Message invalid item name', () => {
        cy.visit('http://localhost:8080/')
        cy.get("a[href='/view/all/newJob']").click()
        cy.get('input#name').type(nameProject)
        cy.get('li[tabindex="0"] span').contains('Pipeline').click()
        cy.get('#ok-button').click()
        cy.get('a[href="/"].model-link').click()
        cy.get("a[href='/view/all/newJob']").click()
        cy.get('input#name').type(nameProject)
        cy.get('div#itemname-invalid.input-validation-message').should('be.visible').and('have.text',`» A job already exists with the name ‘${nameProject}’`)
    })
})

