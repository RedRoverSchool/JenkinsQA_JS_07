/// <reference types="cypress"/>

import HomePage from "../../pageObjects/HomePage";
import ManageJenkinsPage from "../../pageObjects/ManageJenkinsPage";
import ConfigureToolsPage from "../../pageObjects/ConfigureToolsPage";
import { systemConfigurationSectionHeader, systemConfigurationTitlesSectionItems, manageJenkinsPageEndpoint } from "../../fixtures/pom_fixtures/manageJenkinsUIData.json";
import { configureToolsPageEndpoint, configureToolsMainHeader } from "../../fixtures/pom_fixtures/configureToolsPageData.json"

describe("manageJenkinsSystemConfigurationTools", () => {
    const homePage = new HomePage();
    const manageJenkinsPage = new ManageJenkinsPage();
    const configureToolsPage = new ConfigureToolsPage();

    beforeEach(() => {
        homePage.clickManageJenkinsLink();
    });

    it("TC_09.06.003 | Visibility of section 'System Configuration' verification", () => {
        manageJenkinsPage.getSystemConfigurationSection(systemConfigurationSectionHeader)
            .should("be.visible")
            .and("have.text", systemConfigurationSectionHeader);
    });

    it("TC_09.06.005 | Visibility of title and icon 'Tools' section item verification", () => {
        manageJenkinsPage.getToolsTitleSectionItem()
            .should("be.visible")
            .then(($el) => {
                expect(systemConfigurationTitlesSectionItems).to.include($el.text());
            });

        manageJenkinsPage.getToolsIconSectionItem()
            .should("be.visible");
    });

    it("TC_09.06.007 | Verify that the user redirects to '/configureTools' page after clicking on the 'Tools' title", () => {
        cy.createBaseURL().then(baseURL => {
            manageJenkinsPage.clickConfigureToolsLink()
                .getConfigureToolsURL()
                .should("be.eql", configureToolsPage.createConfigureURL(baseURL, manageJenkinsPageEndpoint, configureToolsPageEndpoint));
        });

        configureToolsPage.getConfigureToolsMainHeader()
            .should("be.visible")
            .and("have.text", configureToolsMainHeader);
    });
});