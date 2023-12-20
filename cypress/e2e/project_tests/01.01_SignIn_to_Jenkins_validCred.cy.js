
import {WelcomeMessage} from "../../fixtures/Project_test_data/01.01_SignIn_to_Jenkins.json"

describe('01.01_SignIn_to_Jenkins: valid credentials', () => {

    it('valid credentials', () => {
        cy.get('.empty-state-block h1').invoke('text').should('to.eql', WelcomeMessage)
    });
    
});