/// <reference types="cypress"/>

describe('Logo and Title', () => {

    it('verify Jenkins Logo and Title', function () {
      cy.get('#jenkins-home-link').should('be.visible').click()
      cy.get('#jenkins-head-icon').should('have.css', 'background-image');
        })
  })
