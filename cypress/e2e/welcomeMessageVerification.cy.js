/// <reference types="cypress"/>

let welcomeMessage = 'Welcome to Jenkins!';
let textBelowMesssage = 'This page is where your Jenkins jobs will be displayed. To get started, you can set up distributed builds or start building a software project.'

describe('welcomeMessageVerification', () => {
    it(' Dashboard > Welcomed message verification', () => {
       cy.get('.empty-state-block h1')
         .should('have.text', welcomeMessage )
         .invoke('attr', '<h1>');
       cy.get('.empty-state-block p')
         .should('have.text', textBelowMesssage)
    });
});