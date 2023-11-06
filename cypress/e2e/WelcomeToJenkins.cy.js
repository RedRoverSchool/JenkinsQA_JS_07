///<reference types ="cypress"/>
import { mainPageTitle } from '../fixtures/WelcomeToJenkins.json';

describe('WelcomeToJenkins.cy', () => {

    it("TC_02.03.012 | Dashboard > 'Welcome to Jenkins' verification", () => {

        cy.get('.empty-state-block h1')        
        .should('be.visible')
        .and('have.text', mainPageTitle);      
    })
})