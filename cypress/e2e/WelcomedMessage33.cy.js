/// <reference types="cypress"/>

import welcomeMessage33 from "../fixtures/welcomeMessage33.json"

describe('WelcomedMessage33', () => {
    
    it('TC_02.03.022 | Dashboard > Welcomed message', () => {
        cy.get('div.empty-state-block > h1').should('be.visible').and('have.text', welcomeMessage33.welcomeMessage);
        cy.get('div.empty-state-block > p').should('be.visible').and('have.text', welcomeMessage33.explanationHowToWork);
    });

});