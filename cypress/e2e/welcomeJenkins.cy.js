///<reference types ="cypress"/>

describe ('welcomeJenkins', () =>{

    it('"Welcome to Jenkins" title and text', function (){

cy.get('h1').should('be.visible').and('have.text', 'Welcome to Jenkins!');
cy.get('')
    })

})