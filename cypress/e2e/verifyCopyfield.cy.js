///<reference types ="cypress"/>
import { jobName } from "../fixtures/createNewJob.json";

describe('Verify Copy from field', () => {
    beforeEach('Create new job', () => {
        cy.get("a[href='/view/all/newJob']").click()
        cy.get('label[for=name]').should('have.text', 'Enter an item name')
        cy.get('input#name.jenkins-input').type(jobName)
        cy.get('li[tabindex="0"] span').should('contain', 'Freestyle project').click({ multiple: true })
        cy.get('#ok-button').click()
        cy.get('.jenkins-app-bar__content > h1').should('have.text','Configuration')
        cy.get('.jenkins-button--primary ').click()
    })

    it("TC__03.08.09 | New Item > Verify 'Copy from' field >can't create new item from none existing item", () => {
        cy.get('.jenkins-input  auto-complete  yui-ac-input').click()
        
     })
})