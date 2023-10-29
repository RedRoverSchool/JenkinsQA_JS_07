/// <reference types="cypress"/>



describe('logoAndTitleOnDashboadPage', () => {
    it('TC_02.02.003 | Verify visibility of Jenkins logo and title on Dashboard page', () => {
       
        cy.get('#jenkins-head-icon').should('be.visible')
        cy.get('#jenkins-head-icon').click()
        cy.wait(3000)
        cy.get('#jenkins-head-icon').should('be.visible');

        cy.get('#jenkins-name-icon').should('be.visible');
        cy.get('#jenkins-name-icon').click();
        cy.wait(3000)
        cy.get('#jenkins-name-icon').should('be.visible');
        

    });
});