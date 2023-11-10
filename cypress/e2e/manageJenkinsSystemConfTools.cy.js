/// <reference types="cypress"/>

import manageJenkinsSystemConfToolsData from "../fixtures/manageJenkinsSystemConfTools.json";

describe("manageJenkinsSystemConfTools", () => {

    beforeEach(() => {
        cy.get(".task-link-wrapper > a[href='/manage']").click();
    });

    it("TC_09.06.003 | Visibility of section 'System Configuration' verification", () => {
        cy.get("section.jenkins-section--bottom-padding").contains(manageJenkinsSystemConfToolsData.sectionMainHeader)
            .should("be.visible")
            .and("have.text", manageJenkinsSystemConfToolsData.sectionMainHeader);
    });

    it("TC_09.06.005 | Visibility of title and icon 'Tools' section item verification", () => {
        cy.get("a[href='configureTools'] dl dt").should("be.visible")
            .then(($el) => {
                expect(manageJenkinsSystemConfToolsData.sysConfSubHeaders).to.include($el.text());
            });

        cy.get("a[href='configureTools'] .jenkins-section__item__icon").should("be.visible")
    });

    it("TC_09.06.007 | Verify that the user redirects to '/configureTools' page after clicking on the 'Tools' title", () => {
        cy.get("a[href='configureTools'] dl dt").should("be.visible").click();

        cy.url().should("include", manageJenkinsSystemConfToolsData.configureToolsPageEndpoint);
        cy.get(".jenkins-app-bar__content h1").should("be.visible")
            .then(($el) => {
                expect(manageJenkinsSystemConfToolsData.sysConfSubHeaders).to.include($el.text());
            });
    });
});