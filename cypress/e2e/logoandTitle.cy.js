/// <reference types="cypress"/>

describe('Logo and Title', () => {

    it('verify Jenkins Logo and Title', function () {
      cy.get('#jenkins-home-link').should('be.visible').click()
    })
    it('verify if Icon “Jenkins” is an image', function () {
      cy.get('img[src="/static/0d56e664/images/title.svg"]').should('be.visible');
      cy.get('#jenkins-head-icon').should('be.visible').and('have.attr','src')
     })
})