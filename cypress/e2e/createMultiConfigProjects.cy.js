/// <reference types="cypress"/>

import createMultiConfigProject from "../fixtures/createMultiConfigProject.json"

describe('createMultiConfigProjects', () => {

    it.skip('TC-03.06.004 | Create Multiconfiguration project by clicking "+ New item" in the left panel', function() {
        cy.get('a[href="newJob"]').click()
        cy.get('input#name').type(createMultiConfigProject.newProjectName)
        cy.get('li[tabindex="0"] span').contains('Multi-configuration project').click()
        cy.get('#ok-button').click()
        cy.get('button[name="Submit"]').click()
       
    
        cy.get('.matrix-project-headline.page-headline').should('have.text', 'Project New project MultiConfig')
    })

    it('TC_03.06.003 | Create Multiconfiguration project by clicking "+ New item" in the drop-down menu under the Dashboard', function() {
        
        cy.get('.jenkins-breadcrumbs__list-item:nth-child(1) > .model-link').realHover('mouseover')
        cy.get('li > a > button.jenkins-menu-dropdown-chevron').click()
        cy.get('.jenkins-dropdown__item:nth-child(1)').click()
        cy.get('input#name').type(createMultiConfigProject.newProjectName)
        cy.get('li[tabindex="0"] span').contains('Multi-configuration project').click()
        cy.get('#ok-button').click()
        cy.get('button[name="Submit"]').click()
        cy.get('#breadcrumbs > li:nth-child(1) > a').click();
       
        cy.get('td a[href*="job"].jenkins-table__link').should('have.text', 'New project MultiConfig')
   })

   it.skip('TC_03.06.005 | Create Multiconfiguration project (no projects were created prior)', function(){
        cy.get('li a[href*="newJob"]').click()
        cy.get('input#name').type(createMultiConfigProject.newProjectName)
        cy.get('li[tabindex="0"] span').contains('Multi-configuration project').click()
        cy.get('#ok-button').click()
        cy.get('button[name="Submit"]').click()
        cy.get('#breadcrumbs > li:nth-child(1) > a').click();
       
        cy.get('td a[href*="job"].jenkins-table__link').should('have.text', 'New project MultiConfig')
   })


})