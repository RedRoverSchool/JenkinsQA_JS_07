/// <reference types="cypress"/>

import createMultibranchPipeline from "../fixtures/createMultibranchPipeline.json"

describe('createMultibranchPipeline', () => {

    it('TC_00.006.006 | New Item > Create Multibranch Pipeline', () => {
        cy.get('[href=\'/view/all/newJob\']').click()
        cy.get('#name').type(createMultibranchPipeline.newProjectName)
        cy.get('.org_jenkinsci_plugins_workflow_multibranch_WorkflowMultiBranchProject').click()
        cy.get('#ok-button').click()
        cy.get('#jenkins-home-link').click()

        cy.get(`tr#job_${createMultibranchPipeline.newProjectName} > td:nth-of-type(3)`)
            .should('have.text', createMultibranchPipeline.newProjectName)
    })
})