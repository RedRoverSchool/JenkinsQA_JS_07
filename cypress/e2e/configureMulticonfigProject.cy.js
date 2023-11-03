/// <reference types="cypress"/>

import configureMulticonfigProject from '../fixtures/configureMulticonfigProject.json';

describe('Multi-configuration project configuration', () => {

    it('TC_03.07.001 | New Item > Create Multiconfiguration project > Verify left-side menu items', () => {
        cy.get('a[href="/view/all/newJob"]').click();
        cy.title().should('include', 'New Item [Jenkins]');
        cy.get('input.jenkins-input').type(configureMulticonfigProject.projectName);
        cy.get('.hudson_matrix_MatrixProject').click();
        cy.get('#ok-button').click();
        
        cy.get('.jenkins-app-bar__content > h1').should('have.text', 'Configure');
        cy.get('div#tasks .task').should('have.length', 8).then(($els) => {
            const sideMenuItems = Cypress.$.makeArray($els).map($el => $el.innerText);
            expect(sideMenuItems).to.be.deep.equal(configureMulticonfigProject.expectedSideMenuItems);
        });
    });  
});