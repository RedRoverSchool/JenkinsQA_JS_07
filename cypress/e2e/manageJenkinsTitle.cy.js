/// <reference types="cypress"/>

import manageJenkinsTitleData from "../fixtures/manageJenkinsTitle.json";

describe("manageJenkinsTitle", () => {
    beforeEach(() => {
        cy.get(".task-link-wrapper > a[href='/manage']").click();
    })

    it("TC_09.01.001 | Manage Jenkins > Title > Main header displays verification", () => {
        cy.url().should("include", manageJenkinsTitleData.manageJenkinsEndpoint);

        cy.get(".jenkins-app-bar__content > h1").should("be.visible")
            .and("have.text", manageJenkinsTitleData.mainHeaderPage);
    });

    it("TC_09.01.002 | Manage Jenkins > Title > 5 section-headers displays verification", () => {
        cy.get(".jenkins-section > h2").should("be.visible")
            .then(($els) => {
                return Cypress.$.makeArray($els).map($el => $el.innerText);
            })
            .and("have.length", 5)
            .and("deep.equal", manageJenkinsTitleData.subHeadersMainJenkinsHeaders);
    });
}); 