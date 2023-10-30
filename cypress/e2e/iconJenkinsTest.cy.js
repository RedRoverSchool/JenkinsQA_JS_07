///<reference types ="cypress"/>

describe ('iconJenkinsTest', () =>{

    it('TC_02.02.001 | Verify icon and logo on the first page', function (){

cy.get('#jenkins-head-icon').click().should('be.visible');
cy.get('#jenkins-name-icon').click().should('be.visible');

    });
})