// <reference types="cypress"/>

import pipelineProject from '../fixtures/pipelineProject.json'

describe('addDescriptionToPipeline', () =>{
    // beforeEach(() => {
    //     cy.get('a[href="/view/all/newJob"]').click()
    //     cy.get('#name').type(pipelineProject.pipelineName)
    //     cy.get('.label').contains('Pipeline').click()
    //     cy.get('#ok-button').click()
    //     cy.get('.jenkins-button--primary').click()
    //     cy.get('.jenkins-breadcrumbs__list-item a[href="/job/FirstPipelineProject/"]').click()
    //    // cy.get('').should('include.text', `${pipelineProject.pipelineName}`).should('exist');
       //a href="/job/FirstPipelineProject/"
    //})
    it('TC_03.05.001 | Create Pipeline Project > Verify ability to fill description in the "Description" text area and save it', () =>{
        cy.get('a[href="/view/all/newJob"]').click()
        cy.get('#name').type(pipelineProject.pipelineName)
        cy.get('.label').contains('Pipeline').click()
        cy.get('#ok-button').click()
       // cy.get('.jenkins-button--primary').click()
     cy.get('.jenkins-breadcrumbs__list-item a[href="/job/FirstPipelineProject/"].model-link').should('have.text', `${pipelineProject.pipelineName}`)
       //cy.get('.jenkins-breadcrumbs__list-item:nth-child(1) > .model-link').click()
       // cy.get('td a[href*="job"].jenkins-table__link').should('have.text', 'FirstPipelineProject')
        //cy.get('').should('include.text', `${pipelineProject.pipelineName}`).should('exist');
    //    cy.get('#tasks div:nth-child(5)span a').click()
    //     //cy.get('#description-link').click()
        cy.get('textarea[name="description"]').clear().type(pipelineProject.descriptionPipeLine)
    //     cy.get('.jenkins-input').type(pipelineProject.descriptionPipeLine)
      cy.get('.jenkins-button--primary').click()
        cy.get('#description').should('contain',`${pipelineProject.descriptionPipeLine}`).should('exist');
    //     cy.get('button[name="Submit"]').first().click()
    })

})

