/// <reference types="cypress"/>
import dbCommandPanel1 from "../fixtures/dbCommandPanel1.json"

describe('Verify Command panel on the left side is desplayed', function () {

    it('TC_02.04.21 | Dashboard > Command panel on the left side', () => {

        cy.get('#tasks').should('be.visible')
        .children('.task').should('have.length', 5)
       .then($els => Cypress.$.makeArray($els).map($el => $el.innerText))
       .should('deep.equal', dbCommandPanel1.allTasks); 
    });  
    });
