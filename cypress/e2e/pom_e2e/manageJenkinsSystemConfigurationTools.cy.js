/// <reference types="cypress"/>

import ManageJenkinsPage from "../../pageObjects/ManageJenkinsPage";
import ConfigureToolsPage from "../../pageObjects/ConfigureToolsPage";
import { systemConfigurationSectionHeader, manageJenkinsPageEndpoint, toolsItemHeader } from "../../fixtures/pom_fixtures/manageJenkinsUIData.json";
import { configureToolsPageEndpoint, configureToolsMainHeader } from "../../fixtures/pom_fixtures/configureToolsPageData.json"

describe("manageJenkinsSystemConfigurationTools", () => {
    const manageJenkinsPage = new ManageJenkinsPage();
    const configureToolsPage = new ConfigureToolsPage();

    beforeEach(() => {
        cy.redirectToManageJenkinsPage();
    });

    it("TC_09.06.003 | Visibility of section 'System Configuration' verification", () => {
        manageJenkinsPage.getSystemConfigurationSection(systemConfigurationSectionHeader)
            .should("be.visible")
            .and("have.text", systemConfigurationSectionHeader);
    });

    it("TC_09.06.005 | Visibility of header and icon 'Tools' section item verification", () => {
        manageJenkinsPage.retrieveToolsSectionHeader()
            .should("have.text", toolsItemHeader);

        manageJenkinsPage.getToolsIconSectionItem()
            .should("be.visible");
    });

    it("TC_09.06.007 | Verify that the user redirects to '/configureTools' page after clicking on the 'Tools' title", () => {
        cy.createBaseURL().then(baseURL => {
            const configureToolsURL = configureToolsPage.createConfigureToolsURL(baseURL, manageJenkinsPageEndpoint,
                configureToolsPageEndpoint);

            manageJenkinsPage.clickConfigureToolsSectionItem()
                .getConfigureToolsURL()
                .should("be.eql", configureToolsURL);
        });

        configureToolsPage.getConfigureToolsMainHeader()
            .should("be.visible")
            .and("have.text", configureToolsMainHeader);
    });
});