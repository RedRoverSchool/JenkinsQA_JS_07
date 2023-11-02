
describe('Dashboard', () => {
    it("Home page|Verify that header includes reference to the User's account", () => {
        cy.visit('http://localhost:8080/')
        cy.get('#page-header').should('include', 'a[href="/user/admin"]')
    }) 
})