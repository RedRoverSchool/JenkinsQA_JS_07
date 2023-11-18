/// <reference types="cypress"/>

import {projetcName} from "../fixtures/multiconfigProject.json";
import {typeOfProject} from "../fixtures/multiconfigProject33.json";
import {projectDescription} from "../fixtures/previewOfProjectDescription.json";

describe('verifyFormattingDescriptionByClickingPreview.cy', () => {

    it("TC_03.07.010 | New Item > Check the formatting in the text area Description by clicking on Preview", () => {
        cy.get('a[href="newJob"]').click()
        cy.get('input#name').type(projetcName)
        cy.get('li[tabindex="0"] span').contains(typeOfProject).click()
        cy.get('#ok-button').click()
        cy.get('[name="description"]').type(projectDescription)
        cy.get('[previewendpoint="/markupFormatter/previewDescription"]').click()
        
        cy.get('.textarea-preview').should('have.text', projectDescription)
    })  
})
