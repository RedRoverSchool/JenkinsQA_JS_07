/// <reference types="cypress"/>

import createUser from '../fixtures/createUser.json'

describe('Create user with Empty Fields', () => {
        
    beforeEach(function() {
        cy.get('#tasks > div:nth-child(4)').click();
        cy.get('.jenkins-section a[href="securityRealm/"]').click();
        cy.get('#main-panel .jenkins-app-bar__controls').click();
        cy.get('#bottom-sticker .jenkins-button--primary').click();
    })   

    createUser.fields.forEach((field) => {
        it(`TC_09.14.007 | Create User with empty fields > Check ${field.name} message`, () => {
            if(cy.get(field.selector).should('have.text', '')) {
                cy.get(`#main-panel > form > div.form-content > div:nth-child(${field.child})`)
                .should('contain', field.error_message);
            }
            
        });
        
    });
   
});