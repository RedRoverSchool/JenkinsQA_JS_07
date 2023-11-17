/// <reference types="cypress"/>

import multiconfigProject33 from "../fixtures/multiconfigProject33.json"

describe.skip('multiconfigProject33', () => {
    
    it('TC_03.06.012 | Create Multiconfiguration project', () => {
        cy.get('a[href="/view/all/newJob"]').click();
        cy.get('input#name').type(multiconfigProject33.projectName);
        cy.get('li[tabindex="0"] span').contains(multiconfigProject33.typeOfProject).click();
        cy.get('#ok-button').click();
        cy.get('.jenkins-button--primary').click();
        cy.get('#jenkins-home-link').click();
        cy.get('td a[href*="job"].jenkins-table__link').should('have.text', multiconfigProject33.projectName);
    });
        
});