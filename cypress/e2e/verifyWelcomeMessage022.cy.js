/// <reference types="cypress"/

import WelcomeToJenkins from "../fixtures/WelcomeToJenkins.json"

describe('WelcomeToJenkins', () => {
   it('TC_02.03.022 | Dashboard > Verify  Welcomed message on the main page', () =>{
    cy.get('div[class="empty-state-block"]').should('have.text', WelcomeToJenkins.mainPageTitle);
   })
});