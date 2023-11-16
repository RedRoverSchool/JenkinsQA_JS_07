/// <reference types="cypress"/>

import manageJenkinsSystemConfToolsData from "../fixtures/manageJenkinsSystemConfTools.json";
import { manageJenkinsPageEndpoint } from "../fixtures/manageJenkinsTitle.json";
import { sectionItemsHeaders } from "../fixtures/manageJenkinsTools.json";

describe("manageJenkinsSystemConfTools", () => {
    beforeEach(() => {
        cy.get("a[href='/manage']").click();
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
        const baseUrl = `http://${Cypress.env("local.host")}:${Cypress.env("local.port")}`;
        const confToolsPageUrl = `${baseUrl}/${manageJenkinsPageEndpoint}/${manageJenkinsSystemConfToolsData.configureToolsPageEndpoint}/`;

        cy.get("a[href='configureTools'] dl dt").should("be.visible").click();

        cy.url().should("be.eql", confToolsPageUrl);

        cy.get(".jenkins-app-bar__content h1").should("be.visible")
            .then(($el) => {
                expect(manageJenkinsSystemConfToolsData.sysConfSubHeaders).to.include($el.text());
            });
    });

    it("TC_09.06.009 | Checking the visibility of the title and icon 'Tools'", () => {
        cy.get('.jenkins-section.jenkins-section--bottom-padding')
            .contains(manageJenkinsSystemConfToolsData.sectionMainHeader)
            .next()
            .contains(sectionItemsHeaders.tools)
            .should('be.visible')
        cy.get('a[href="configureTools"] .jenkins-section__item__icon svg.icon')
            .should('be.visible')
    });
});