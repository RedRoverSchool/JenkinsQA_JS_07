///<reference types ="cypress"/>
import createNewJob from "../fixtures/createNewJob.json";

describe('Verify "Copy from" field', () => {
    beforeEach('Create new job', () => {
        cy.get("a[href='/view/all/newJob']").click()
        cy.get('label[for=name]').should('have.text', createNewJob.fieldName)
        cy.get('input#name.jenkins-input').type(createNewJob.jobName)
        cy.get('.hudson_model_FreeStyleProject span').should('contain', createNewJob.projectName).click()
        cy.get('#ok-button').click()
        cy.get('.jenkins-app-bar__content > h1').should('have.text', createNewJob.text)
        cy.get('.jenkins-button--primary ').click()
    })
    it("TC__03.08.09 | New Item > Verify 'Copy from' field >can't create a new item from none existing item", () => {
        cy.get("#jenkins-name-icon").click()
        cy.get("a[href='/view/all/newJob']").click()
        cy.get('#name.jenkins-input').type(createNewJob.type)
        cy.get('div.item-copy').click()
        cy.get('#from.jenkins-input.auto-complete').type(createNewJob.rendomJob)
        cy.get('#ok-button').click()

        cy.get('h1').should('have.text', createNewJob.message)

    })
})