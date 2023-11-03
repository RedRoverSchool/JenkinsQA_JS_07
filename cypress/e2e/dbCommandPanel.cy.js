/// <reference types="cypress"/>


describe('Verify Dashboard links redirected to the corresponding page', () => {
    it('TC_02.04.06 | Dashboard > Command panel on the left side', ()=>{ 
        cy.get('a[href="/view/all/newJob"]').click()
        cy.url().should('eq', 'http://localhost:8080/view/all/newJob');
        cy.get('#jenkins-name-icon').click()
        cy.get('a[href="/asynchPeople/"]').click();
        cy.url().should('eq', 'http://localhost:8080/asynchPeople/');
        cy.get('#jenkins-name-icon').click();
        cy.get('a[href="/view/all/builds"').click()
        cy.url().should('eq', 'http://localhost:8080/view/all/builds');
        cy.get('#jenkins-name-icon').click();
        cy.get('a[href="/manage"').click()
        cy.url().should('eq', 'http://localhost:8080/manage/');
        cy.get('#jenkins-name-icon').click();
        cy.get('a[href="/me/my-views"]').click()
        cy.url().should('eq', 'http://localhost:8080/me/my-views/view/all/')
    })
})