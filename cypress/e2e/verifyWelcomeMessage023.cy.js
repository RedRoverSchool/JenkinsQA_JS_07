/// <reference types="cypress"/

import WelcomeToJenkins from "..//fixtures/welcomeMessage023.json"

describe('verifyWelcomeMessage023', () => {
   it('TC_02.03.022 | Dashboard > Verify  Welcomed message on the main page', () =>{
      cy.get('div[class="empty-state-block"]').find('h1').should('have.text', WelcomeToJenkins.mainMessage);
      cy.get('div.empty-state-block > p').should('be.visible').and('have.text', WelcomeToJenkins.helpMessage);
   })
});