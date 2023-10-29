/// <reference types="cypress"/>

import manageJenkinsTitle from "../fixtures/manageJenkinsTitle.json";

describe("Manage Jenkins > Title", () => {

    it("TC_09.01.001 | Manage Jenkins > Title > Main header displays verification", () => {
        cy.get(".task-link-wrapper > a[href='/manage']").click();

        cy.get(".jenkins-app-bar__content > h1").should("be.visible")
            .and("have.text", manageJenkinsTitle.mainHeaderPage)
            .and("have.prop", "tagName", "H1");
    });
}); 