/// <reference types="cypress"/>

describe('US_02.02 | Header > Jenkins Logo and Title', () => {
    
    it('TC_02.02.005 | Header > Check Jenkins Icon Presence', () => {
        cy.get('img#jenkins-name-icon').should('be.visible')
        cy.get('img#jenkins-head-icon').should('have.attr', 'src')
        cy.get('#search-box').type('test')
        cy.get('div #search-box-sizer').should('contain', 'test')
        cy.get('#jenkins-name-icon').click()
        cy.get('div #search-box-sizer').should('be.empty')
        cy.get('img#jenkins-head-icon').should('be.visible')
        cy.get('img#jenkins-head-icon').should('have.attr', 'src')
        cy.get('#search-box').type('test')
        cy.get('div #search-box-sizer').should('contain', 'test')
        cy.get('#jenkins-head-icon').click()
        cy.get('div #search-box-sizer').should('be.empty')
    })
})