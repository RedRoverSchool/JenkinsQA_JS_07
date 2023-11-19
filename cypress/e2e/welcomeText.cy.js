///<reference types ="cypress"/>
import { welcomeMessage } from '../fixtures/welcomePageVerification.json';
import { explanationText } from '../fixtures/welcomePageVerification.json';

describe('welcomeText', () => {
    
    it('TC_02.03.019 Welcome to Jenkins massage verification', function () {
        cy.get('.empty-state-block h1').should('be.visible').and('have.text', welcomeMessage);
    }) 
    it('TC_02.03.021 Dashboard Explanation text message', function () {
        cy.get('.empty-state-block p').should('be.visible').and('have.text', explanationText);
    }) 
})