/// <reference types="cypress"/>
import dbCommandPanel1 from "../fixtures/allTasks.json"

describe('Verify Command panel on the left side is desplayed', function () {

    it('TC_02.04.21 | Dashboard > Command panel on the left side', () => {

        cy.get('#div.task').then(($els) => {
            return Cypress.$.makeArray($els)
                .should('have.length', 5)
                .and('deep.equal', dbCommandPanel1.allTasks)
        })
    });
})