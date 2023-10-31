// <reference types="cypress"/>

import pipelineProject from '../fixtures/pipelineProject.json'

describe('addDescriptionToPipeline', () =>{
   
    it('TC_03.05.001 | Create Pipeline Project > Verify ability to fill description in the "Description" text area and save it', () =>{
        cy.get('a[href="/view/all/newJob"]').click()
        cy.get('#name').type(pipelineProject.pipelineName)
        cy.get('.label').contains('Pipeline').click()
        cy.get('#ok-button').click()
        cy.get('.jenkins-breadcrumbs__list-item a[href="/job/FirstPipelineProject/"].model-link')
            .should('have.text', `${pipelineProject.pipelineName}`)
        cy.get('textarea[name="description"]').clear().type(pipelineProject.descriptionPipeLine)
        cy.get('.jenkins-button--primary').click()
        cy.get('#description')
            .should('contain',`${pipelineProject.descriptionPipeLine}`)
            .and('exist')
    })
})

