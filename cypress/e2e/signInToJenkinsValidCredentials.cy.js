/// <reference types="cypress"/>

describe('signInToJenkinsValidCredentials', () => {
    
    it('Sign In with valid credentials', () => {
        
        cy.visit('http://localhost:8080/login ')
        cy.get('#j_username').type('admin')
        cy.get('#j_password').type('e7ff746b4cc745aba0d8d96f617e0517')
        cy.get('.jenkins-button').click()

    });
});
