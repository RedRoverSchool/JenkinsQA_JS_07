///<reference types ="cypress"/>

describe('iconJenkinsTest', () => {

    it('TC_02.02.001 | Verify icon and logo on the first page', function () {
        cy.get('#jenkins-head-icon').should('be.visible').click();
        cy.get('#jenkins-name-icon').should('be.visible').click();

    });
})