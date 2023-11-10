/// <reference types="cypress"/>

import { JenkinsHome } from '../fixtures/logoAndTitle.json'

describe('logoAndTitle33', () => {
    
    it('TC_02.02.009 | Header > Jenkins Logo and Title', () => {
        cy.visit('http://localhost:8080/');
        cy.get('#jenkins-home-link').should('be.visible').click(); 
        cy.get('#jenkins-name-icon').should('have.attr', 'src');   
        cy.get('h1').should('have.text', JenkinsHome.frontPage).and('be.visible');
    });

});