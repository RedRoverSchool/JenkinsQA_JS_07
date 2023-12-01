/// <reference types = "cypress"/>

import projectDescription from "../fixtures/mcProjectConfigData.json";

describe('mcProjectConfig', () => {   

    beforeEach(function() {        
        cy.get('a[href="newJob"]').click()
        cy.get('input#name').type('Project 1')
        cy.get('li.hudson_matrix_MatrixProject').click()
        cy.get('#ok-button').click()
    })

    it.skip('TC_03.07.011.1 | Configure new multiconfiguration project > Add description', function() {
        cy.get('div.jenkins-section textarea.jenkins-input').type(projectDescription.currentDescription)
        cy.get('button[name="Submit"]').click()

        cy.get('#description > div:nth-child(1)').should('have.text', projectDescription.currentDescription)
    });

    it('TC_03.07.011.2 | Configure new multiconfiguration project > Check box test ', function() {
        cy.get('#cb8').check({force: true}).should('be.checked')
        
        cy.get('#cb4').should('not.be.checked')
        cy.get('#cb5').should('not.be.checked')
        cy.get('#cb6').should('not.be.checked')
        cy.get('#cb7').should('not.be.checked')
    });
})