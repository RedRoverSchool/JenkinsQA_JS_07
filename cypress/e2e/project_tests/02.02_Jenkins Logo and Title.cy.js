
import {LogoTitle} from '../../fixtures/Project_test_data/02.02_Jenkins Logo and Title.json'
const LOCAL_PORT = Cypress.env('local.port');
const LOCAL_HOST = Cypress.env('local.host');

describe('02.02_Check Jenkins icon/logo', () => {
    it('Jenkins icon', () => {
       cy.get('#jenkins-head-icon').should('be.visible')
       cy.get('#jenkins-head-icon').should('have.attr','src')
       .get('#jenkins-head-icon').click()
       .url().should('be.eql', `http://${LOCAL_HOST}:${LOCAL_PORT}/`)
        
    });

    it.only('Jenkins logo', () => {
        cy.get('#jenkins-name-icon').should('be.visible')
        .and('have.attr', 'alt', LogoTitle)
        .get('#jenkins-name-icon').should('have.attr','src')
        .get('#jenkins-name-icon').click()
        .url().should('be.eql', `http://${LOCAL_HOST}:${LOCAL_PORT}/`)
    });
});