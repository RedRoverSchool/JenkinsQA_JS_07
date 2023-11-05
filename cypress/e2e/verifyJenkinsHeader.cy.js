/// <reference types="cypress"/>

import homepageTitle from "../fixtures/titlePage.json"
describe('verifyHeaderLogoClickable', function() {

    it('TC_02.02.002 | Header > Verify Jenkins Logo (image) visible, after click redirect to Homepage', function ()  {
        cy.get('#jenkins-head-icon').should('be.visible').click()
        cy.title().should('eq', homepageTitle.homepageTitle);
    })

    it('TC_02.02.007 | Header >Verify Jenkins Icon (image with text Jenkins) is visible after click redirect to Homepage', function()  {
        cy.get('#jenkins-name-icon').should('be.visible').click()
        cy.get('title').should('include.text',  homepageTitle.homepageTitle);
    })

    it('TC_02.02.006 | Header > Jenkins Logo is visible and after click redirect to Homepage', () => {
        cy.get('#jenkins-head-icon').should('be.visible').click();
        cy.get('.jenkins-breadcrumbs').should('have.text',"Dashboard").and('have.length',1);
    })
});