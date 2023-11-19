/// <reference types="cypress"/>

import {user, url} from '../fixtures/newUser.json'

describe('CreateNewUser', () => {
    
    const baseUrl = `http://${Cypress.env("local.host")}:${Cypress.env("local.port")}/${url.securityRealm}`

    it('TC_09.14.008 | Manage Jenkins > Security> Create User with valid input', () => {
        cy.visit(`${baseUrl}/${url.addUser}`)
        cy.get('#username').type(user.name)
        cy.get('input[name="password1"]').type(user.password)
        cy.get('input[name="password2"]').type(user.password)
        cy.get('input[name="fullname"]').type(user.fullName)
        cy.get('input[name="email"]').type(user.email)
        cy.get('button[name="Submit"]').click()

        cy.url().should('contain', baseUrl)
        cy.get('#main-panel h1').should('have.text', 'Users') 
        cy.get('#people .inside').then(($els)=>{
            const users = Cypress.$.makeArray($els).map(($el) => $el.innerText)
            expect(users).includes(user.name)
        })
    });
});