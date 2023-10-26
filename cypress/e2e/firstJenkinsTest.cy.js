/// <reference types="cypress"/>

describe('first Jenkins test', () => {

    it('verify Welcome message', function () {
      cy.get('.empty-state-block h1').should('be.visible').and('have.text', 'Welcome to Jenkins!')
    })

    it('verify dropdown menu Dashboard', function () {
      cy.get('.jenkins-breadcrumbs__list-item > .model-link').should('have.text', 'Dashboard').realHover();
      cy.get('li.jenkins-breadcrumbs__list-item button.jenkins-menu-dropdown-chevron').should('be.visible').click();
      cy.get('.jenkins-dropdown a').should('be.visible').and('have.length', 5);
    })
})