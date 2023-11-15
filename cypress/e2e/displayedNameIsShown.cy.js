/// <reference types="cypress"/>

import multiconfigProject from "../fixtures/multiconfigProject.json";
import displayedNameOfMulticonfigProject from "../fixtures/displayedNameOfMulticonfigProject.json";

describe('verifyDisplayedNameisShown', () => {

    it("TC_03.07.06 | New Item > Verify displayed name is shown", () => {
        cy.get('a[href="newJob"]').click()
        cy.get('input#name').type(multiconfigProject.projetcName)
        cy.get('li[tabindex="0"] span').contains('Multi-configuration project').click()
        cy.get('#ok-button').click()
        cy.get('section>div.jenkins-form-item.tr button').click()
        cy.get('input[name="_.displayNameOrNull"]').type(displayedNameOfMulticonfigProject.displayedName)
        cy.get('[name="Submit"]').click()
        
        cy.get('h1.page-headline').should('have.text', displayedNameOfMulticonfigProject.expectedDisplayedName)
    })  
})
