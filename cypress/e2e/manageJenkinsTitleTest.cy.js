/// <reference types="cypress"/>

import manageJenkinsTitle from "../fixtures/manageJenkinsTitle.json";

describe("Manage Jenkins > Title", () => {

    it("TC_09.01.001 | Manage Jenkins > Title > Main header displays verification", () => {
        cy.get(".task-link-wrapper > a[href='/manage']").click();

        cy.get(".jenkins-app-bar__content > h1").should("be.visible")
            .and("have.text", manageJenkinsTitle.mainHeaderPage)
            .and("have.prop", "tagName", "H1");
    });

    it("TC_09.01.002 | Manage Jenkins > Title > 5 section-headers displays verification", () => {
        const objOfSubHeadersFromJSON = JSON.parse(JSON.stringify(manageJenkinsTitle.subHeadersPage));
        const arrOfSubHeadersFromObj = Object.values(objOfSubHeadersFromJSON);

        cy.get(".task-link-wrapper > a[href='/manage']").click();

        cy.get(".jenkins-section > h2").should("be.visible")
            .and("have.prop", "tagName", "H2")
            .then(($els) => {
                return Cypress.$.makeArray($els).map($el => $el.innerText);
            })
            .and("deep.equal", arrOfSubHeadersFromObj)
            .and("have.length", 5);
    });
}); 