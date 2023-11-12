///<reference types ="cypress"/>
import { jobName, rendomJob } from "../fixtures/createNewJob.json";

describe('Verify "Copy from" field', () => {
    beforeEach('Create new job', () => {
        cy.get("a[href='/view/all/newJob']").click()
        cy.get('label[for=name]').should('have.text', 'Enter an item name')
        cy.get('input#name.jenkins-input').type(jobName)
        cy.get('li[tabindex="0"] span').should('contain', 'Freestyle project').click({ multiple: true })
        cy.get('#ok-button').click()
        cy.get('.jenkins-app-bar__content > h1').should('have.text', 'Configuration')
        cy.get('.jenkins-button--primary ').click()
    })
    it("TC__03.08.09 | New Item > Verify 'Copy from' field >can't create a new item from none existing item", () => {
        cy.get("#jenkins-name-icon").click()
        cy.get("a[href='/view/all/newJob']").click()
        cy.get('#name.jenkins-input').type('j')
        cy.get('div.item-copy').click()
        cy.get('#from.jenkins-input.auto-complete').type(rendomJob)
        cy.get('#ok-button').click()

        cy.get('h1').should('contain', 'Error')

    })
})