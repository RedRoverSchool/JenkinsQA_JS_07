/// <reference types="cypress"/>
import dbCommandPanel1 from "../fixtures/allTasks.json"

describe('Verify Command panel on the left side is desplayed',() =>{
it('TC_02.04.21 | Dashboard > Command panel on the left side', ()=>{
    cy.visit('http://localhost:8080/')
 cy.get('#tasks').should('have.length', 5)
 .and('deep.equal', dbCommandPanel1.allTasks )  
})
})