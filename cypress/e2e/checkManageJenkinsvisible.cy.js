/// <reference types="cypress"/>
describe('checkManageJenkinsvisible', () => {
    it('TS_09.01.007 | Manage Jenkins > Title', () => {
       
        cy.get('.task-link-wrapper  > a[href="/manage"]').click()
       cy.get(".jenkins-app-bar").should('contain', "Manage Jenkins")
        
        
        
    });
    
});