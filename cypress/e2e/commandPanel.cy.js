/// <reference types="cypress"/>
import {namesData, links} from "../fixtures/commandPanel.json" 



describe('commandPanel', () => {

    it('Check command panel on the left side', () => {
        
        cy.get('#tasks').should('be.visible')
        cy.get('div.task').should('have.length', 5).then(($els) => {
            return Cypress.$.makeArray($els).map(($el) => $el.innerText)
        })
        .should('deep.eql', namesData)
    })


    it('TC_02.04.011 | Command panel > Verify redirection to the page', () => {

        cy.get('a[href="/view/all/newJob"]').click()
        cy.url().should('eq', links.NewItem).go(-1)

        cy.get('a[href="/asynchPeople/"]').click()
        cy.url().should('eq', links.People).go(-1)

        cy.get('a[href="/view/all/builds"]').click()
        cy.url().should('eq', links.BuildHistory).go(-1)

        cy.get('a[href="/manage"]').click()
        cy.url().should('eq', links.ManageJenkins).go(-1)

        cy.get('a[href="/me/my-views"]').click()
        cy.url().should('eq', links.MyViews).go(-1)
    })
})
