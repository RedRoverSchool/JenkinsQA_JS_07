/// <reference types="cypress"/>

import HomePage from "../../pageObjects/HomePage";
import ManageJenkinsPage from "../../pageObjects/ManageJenkinsPage";
import { systemConfigurationSectionHeader } from "../../fixtures/pom_fixtures/manageJenkinsUIData.json";

describe("manageJenkinsSystemConfigurationTools", () => {
    const homePage = new HomePage();
    const manageJenkinsPage = new ManageJenkinsPage();

    beforeEach(() => {
        homePage.clickManageJenkinsLink();
    });

    it("TC_09.06.003 | Visibility of section 'System Configuration' verification", () => {
        manageJenkinsPage.getSystemConfigurationSection()
            .should("be.visible")
            .and("have.text", systemConfigurationSectionHeader);
    });
});