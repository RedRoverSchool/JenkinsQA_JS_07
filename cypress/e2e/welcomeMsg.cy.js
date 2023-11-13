///<reference types ="cypress"/>
import { welcomePage, explanation } from "../fixtures/welcomeMessage.json"
describe('welcomeMsg', () => {

    it('TC_02.03.10 | Dashboard Welcomed message', function () {

        cy.get('h1').should('be.visible').and('have.text', welcomePage)
        cy.get('div.empty-state-block p').should('exist').and('contain.text', explanation)

    })
})