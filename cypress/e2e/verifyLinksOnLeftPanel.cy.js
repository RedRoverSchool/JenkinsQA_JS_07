/// <reference types = "cypress"/>
import items from "../fixtures/leftSidePanelData.json";

describe ("Verify links on left side panel", function () {
    beforeEach(function () {
        cy.get("#side-panel #tasks a").as("sideMenuLink");
})
items.sideLink.forEach((linkName, ind) => {
    it(`TC_02.04.024 | Dashboard > Verify ${linkName} link on left command panel`, function() {
        cy.wrap(this.sideMenuLink[ind]).click()

        cy.url().should('contain', items.endPoint[ind])
        cy.contains(items.headings[ind])

})    
})    
})