/// <reference types="cypress"/>

describe('user_able_to_create_new_job', () => {
    it('TC_03.08.008 +New Item > Copy from > User is able to create a New job', () => {
     cy.get('a[href="/view/all/newJob"]').should('exist').click()
     cy.get('a[href="/view/all/newJob"]').should('not.exist')
     cy.url().should('be.equal', 'http://localhost:8080/view/all/newJob')
    });
});