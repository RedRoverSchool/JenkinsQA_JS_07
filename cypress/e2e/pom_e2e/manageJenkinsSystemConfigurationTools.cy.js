/// <reference types="cypress"/>

import HomePage from "../../pageObjects/HomePage";
import ManageJenkinsPage from "../../pageObjects/ManageJenkinsPage";
import { systemConfigurationSectionHeader, systemConfigurationTitlesSectionItems } from "../../fixtures/pom_fixtures/manageJenkinsUIData.json";

describe("manageJenkinsSystemConfigurationTools", () => {
    const homePage = new HomePage();
    const manageJenkinsPage = new ManageJenkinsPage();

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
});