/// <reference types = "cypress"/>

describe("New Item Tests", () => {

    it("TC_03.01.10 | + New Item | Verify OK button is disabled", () => {
        cy.get('a[href="/view/all/newJob"]').click();
        cy.get('#ok-button').should('have.attr', 'disabled')
    })

} )