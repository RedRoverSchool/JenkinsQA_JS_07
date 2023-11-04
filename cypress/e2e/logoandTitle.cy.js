/// <reference types="cypress"/>

describe('Logo and Title', () => {

  it('TC_02.02.01 |Verify Jenkins Logo and Title', function () {
    cy.get('#jenkins-home-link').should('be.visible')

    cy.get('a[href="/view/all/newJob"]').click()
    cy.get('#jenkins-home-link').click()
    cy.get('.empty-state-block h1').should('have.text', 'Welcome to Jenkins!').and('be.visible')
  })
})

