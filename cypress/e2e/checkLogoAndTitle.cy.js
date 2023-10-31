/// <reference types="cypress"/>

describe('US_02.02 | Header > Jenkins Logo and Title', () => {
    
    it('TC_02.02.005.1 | Header > Check Jenkins Icon Presence', () => {
        cy.get('img#jenkins-name-icon').should('be.visible')
    })
    it('TC_02.02.005.2 | Header > Check Jenkins Icon Is Image', () => {
        cy.get('img#jenkins-head-icon').should('have.attr', 'src')
    })
    it('TC_02.02.005.3 | Header > Check Jenkins Icon Click Page Refresh', () => {
        cy.get('#search-box').type('test')
        cy.get('div #search-box-sizer').should('contain', 'test')
        cy.get('#jenkins-name-icon').click()
        cy.get('div #search-box-sizer').should('be.empty')
    })
    it('TC_02.02.005.4 | Header > Check Jenkins Logo Presence', () => {
        cy.get('img#jenkins-head-icon').should('be.visible')
    })
    it('TC_02.02.005.5 | Header > Check Jenkins Logo Is Image', () => {
        cy.get('img#jenkins-head-icon').should('have.attr', 'src')
    })
    it('TC_02.02.005.6 | Header > Check Jenkins Logo Click Page Refresh', () => {
        cy.get('#search-box').type('test')
        cy.get('div #search-box-sizer').should('contain', 'test')
        cy.get('#jenkins-head-icon').click()
        cy.get('div #search-box-sizer').should('be.empty')
    })
})