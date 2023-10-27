/// <reference types="cypress"/>

const expectedNames = [
    'New Item',
    'People',
    'Build History',
    'Manage Jenkins',
    'My Views',
]

describe('commandPanel', () => {

    it('Check command panel on the left side', () => {
        
        cy.get('#tasks').should('be.visible')
        cy.get('div.task').should('have.length', 5).then(($els) => {
            return Cypress.$.makeArray($els).map(($el) => $el.innerText)
        })
        .should('deep.eql', expectedNames)
    })
})