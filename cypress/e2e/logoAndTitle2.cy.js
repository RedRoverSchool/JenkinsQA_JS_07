/// <reference types="cypress"/>
describe("Logo and title", () =>{
    it("TC_02.02.009 | Verify Jenkins Logo", () =>{
        cy.get('#jenkins-name-icon').should('be.visible')
        cy.get('a[href="/asynchPeople/"]').click()
        cy.get('#jenkins-name-icon').click()
        //cy.get('.empty-state-block').should('contain', 'Welcome to Jenkins!')
        cy.url().should('be.eql','http://localhost:8080/')
    })

    it("TC_02.02.009 | Verify Jenkins Title", () =>{
        cy.get('#jenkins-head-icon').should('be.visible').and('have.attr','src')
        cy.get('a[href="/asynchPeople/"]').click()
        cy.get('#jenkins-head-icon').click()
        cy.url().should('be.eql','http://localhost:8080/')
    })
})