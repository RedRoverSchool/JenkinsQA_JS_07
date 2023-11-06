/// <reference types="cypress"/>

describe('Pipeline > Delete Pipeline', () => {
   
    const randomName = Math.random().toString(36).substring(7);

    beforeEach(()=>{
    
        cy.get("a[href='/view/all/newJob']").click();
        cy.get('#name').type(`NewJob${randomName}`);
        cy.get('.label').contains('Pipeline').click();
        cy.get('#ok-button').click();
        cy.url().should('include', `/NewJob${randomName}/configure`)
    });

    it('TC_05.05.001 | | Pipeline > Delete Pipeline on Dashboard Page', () => {
        cy.get('#jenkins-home-link').click();
        cy.get('a[href*="job/"]').realHover();
        cy.get('#projectstatus .jenkins-menu-dropdown-chevron').click();
        cy.get('.icon-edit-delete').click();
        cy.get('a[href*="job/"]').should('not.exist');
        cy.get('.dashboard .jenkins-table').should('not.exist');
        });

    it('TC_05.05.002 | | Pipeline > Delete cancellation Pipeline on Dashboard Page', () => {
        cy.get('#jenkins-home-link').click();
        cy.get('a[href*="job/"]').realHover();
        cy.get('#projectstatus .jenkins-menu-dropdown-chevron').click();
        cy.get('.icon-edit-delete').click();
        cy.on('window:confirm', (str) => {
            expect(str).to.eql('Delete Pipeline: are you sure?');
        });
        cy.on('window:confirm', () => false);
        cy.get('.dashboard .jenkins-table').should('exist').and('contain', randomName)
        });
});