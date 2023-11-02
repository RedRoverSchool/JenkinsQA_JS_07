/// <reference types="cypress"/>

import manageJenkinsSystemConfTools from "../fixtures/manageJenkinsSystemConfTools.json";

describe("manageJenkinsSystemConfToolsTest", () => {

    beforeEach(() => {
        cy.get(".task-link-wrapper > a[href='/manage']").click();
    });

    it("TC_09.06.003 | Visibility of section 'System Configuration' verification", () => {
        cy.get("section.jenkins-section--bottom-padding").contains("System Configuration")
            .should("be.visible")
            .and("have.text", manageJenkinsSystemConfTools.sectionHeaders);
    });
});