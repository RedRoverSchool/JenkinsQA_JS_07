/// <reference types="cypress"/>

import manageJenkinsTitle from "../fixtures/manageJenkinsTitle.json";

describe("manageJenkinsTitle", () => {
    beforeEach(() => {
        cy.get(".task-link-wrapper > a[href='/manage']").click();
    })

    it("TC_09.01.001 | Manage Jenkins > Title > Main header displays verification", () => {
        cy.url().should("include", manageJenkinsTitle.manageJenkinsEndpoint);

        cy.get(".jenkins-app-bar__content > h1").should("be.visible")
            .and("have.text", manageJenkinsTitle.mainHeaderPage);
    });

    it("TC_09.01.002 | Manage Jenkins > Title > 5 section-headers displays verification", () => {
        const objOfSubHeadersFromJSON = JSON.parse(JSON.stringify(manageJenkinsTitle.subHeadersPage));
        const arrOfSubHeadersFromObj = Object.values(objOfSubHeadersFromJSON);

        cy.get(".jenkins-section > h2").should("be.visible")
            .and("have.prop", "tagName", "H2")
            .then(($els) => {
                return Cypress.$.makeArray($els).map($el => $el.innerText);
            })
            .and("deep.equal", arrOfSubHeadersFromObj)
            .and("have.length", 5);
    });
}); 