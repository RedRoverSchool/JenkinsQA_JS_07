/// <reference types="cypress"/>
import createFreestyleProject2 from '../fixtures/createFreestyleProject2.json'

describe ('Ceate Fressstyle Project', () => {

    it('TC_03.02.001 | New item > Create Freestyle Project > new Freestyle Project configuration page is displayed', function () {

        cy.get('a[href="/view/all/newJob"]').click()
        cy.get('#name').type(createFreestyleProject2.projectName)
        cy.get('.hudson_model_FreeStyleProject').click()
        cy.get('#ok-button').click()

        cy.url().should('contain', `/job/${createFreestyleProject2.projectName}/configure`)
        cy.get('#general').should('have.text', "General")

    }); 
});