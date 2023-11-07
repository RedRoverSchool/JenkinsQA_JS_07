/// <reference types="cypress"/>


describe('StartBuildingYourSoftwareProjectTest',() => {
    it('TC_02.06.003 | Block "Start building your software project" > Option “Create a job” leads to the page “New Job”',() => {
        cy.get('a[href="newJob"]').click()
        cy.url().should('include','/newJob')
        cy.get('.h3').should('be.visible').and('have.text','Enter an item name')
    });

    let listOfJobs = ['Freestyle project', 'Pipeline', 'Multi-configuration project', 'Folder', 'Multibranch Pipeline', 'Organization Folder']
    it.only('Check components on newJob page', () => {
        cy.get('a[href="newJob"]').click()
        cy.get('#name').should('be.visible').and('have.prop', 'tagName', 'INPUT')
        cy.get('.label').should('be.visible').each(($element, index) => {
            cy.wrap($element).should('have.text', listOfJobs[index])
        });
        cy.get('#ok-button').should('be.visible').and('have.prop', 'tagName', 'BUTTON');
    
    });
    

});