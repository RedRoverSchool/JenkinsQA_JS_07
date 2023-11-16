/// <reference types="cypress"/>

import confNewMultiConfProjData from "../fixtures/configureNewMulticonfigurationProject.json";
import { configPageName } from "../fixtures/newItemFreestyleProject.json";
import { expectedSideMenuItems, expectedSideMenuItemsLength } from "../fixtures/configureMulticonfigProject.json";

describe("configureNewMulticonfigurationProject", () => {

    const multiConfProjName = confNewMultiConfProjData.newMultiConfProjName + Date.now();
    const baseUrl = `http://${Cypress.env("local.host")}:${Cypress.env("local.port")}`;
    const confProjPageUrl = `${baseUrl}/${confNewMultiConfProjData.jobPath}/${multiConfProjName}/${confNewMultiConfProjData.confProjPageEndpoint}`;

    beforeEach(() => {
        cy.get("a[href='/view/all/newJob']").click();
        cy.get("#name").type(multiConfProjName);
        cy.get(".hudson_matrix_MatrixProject").click().should("have.attr", "aria-checked", "true");
        cy.get("#ok-button").click();
        cy.url().should("be.eql", confProjPageUrl);
    });

    it("TC_03.07.007 | Configure new Multiconfiguration project > Verify that the left side 'Configure' menu with items is displayed", () => {
        cy.get(".jenkins-app-bar__content h1").should("be.visible").then($el => {
            expect($el.text()).to.be.eql(configPageName);
        });

        cy.get("#tasks").should("be.visible");
    });

    it("TC_03.07.008 | Configure new Multiconfiguration project > Verify that every 'Configure' menu items are displayed with correct title", () => {
        cy.get("div.task").should("be.visible")
            .and("have.length", expectedSideMenuItemsLength)
            .then($el => {
                const menuItemsNameArr = $el.text().trim().replace(/\n/g, '').split(/\s{2,}/);
                expect(menuItemsNameArr).to.deep.equal(expectedSideMenuItems);
            });
    });
});