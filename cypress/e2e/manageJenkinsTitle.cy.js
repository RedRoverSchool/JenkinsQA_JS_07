/// <reference types="cypress"/>

import manageJenkinsTitleData from "../fixtures/manageJenkinsTitle.json";

describe("manageJenkinsTitle", () => {
    beforeEach(() => {
        cy.get("a[href='/manage']").click();
    })

    it.skip("TC_09.01.001 | Manage Jenkins > Title > Main header displays verification", () => {
        const baseUrl = `http://${Cypress.env("local.host")}:${Cypress.env("local.port")}`;
        const manageJenkinsPageUrl = `${baseUrl}/${manageJenkinsTitleData.manageJenkinsPageEndpoint}/`;

        cy.url().should("be.eql", manageJenkinsPageUrl);

        cy.get(".jenkins-app-bar__content h1").should("be.visible")
            .and("have.text", manageJenkinsTitleData.mainHeaderPage);
    });

    it("TC_09.01.002 | Manage Jenkins > Title > 5 section-headers displays verification", () => {
        cy.get(".jenkins-section h2").should("be.visible")
            .then(($els) => {
                return Cypress.$.makeArray($els).map($el => $el.innerText);
            })
            .and("have.length", manageJenkinsTitleData.subHeadersMainJenkinsPageLength)
            .and("deep.equal", manageJenkinsTitleData.subHeadersMainJenkinsPage);
    });
}); 