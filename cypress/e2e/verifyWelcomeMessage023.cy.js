/// <reference types="cypress"/

import WelcomeToJenkins from "..//fixtures/welcomeMessage023.json"

describe('verifyWelcomeMessage023', () => {
   it('TC_02.03.022 | Dashboard > Verify  Welcomed message on the main page', () =>{
      cy.get('div[class="empty-state-block"]>h1').should('have.text', WelcomeToJenkins.mainMessage);
      cy.contains(WelcomeToJenkins.mainMessage).and("have.prop", "tagName", "H1");
      cy.get('div.empty-state-block > p').should('have.text', WelcomeToJenkins.helpMessage);
   })
});