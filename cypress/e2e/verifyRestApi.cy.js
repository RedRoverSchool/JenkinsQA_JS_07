/// <reference types="cypress"/>

import verifyRestApi from "../fixtures/verifyRestApi.json"
describe.skip ('Footer -> Access to REST API', () => {

    it ('TC_15.01.001 -> Verify the link in the footer redirects to API page after click', function(){
        cy.get('div.page-footer__links a.jenkins-button').click()
        cy.get('div#main-panel > h1').should('be.visible').and('have.text', verifyRestApi.pageApiHeader)
        cy.get('div#main-panel > p').should('include.text', verifyRestApi.pageApiFirstParagraphText)
        cy.url().should('include', verifyRestApi.pageApiUrl)
    })
})
