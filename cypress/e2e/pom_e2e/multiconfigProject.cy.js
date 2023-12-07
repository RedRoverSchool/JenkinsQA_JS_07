/// <reference types="cypress"/>

import HomePage from "../../pageObjects/HomePage";
import MultiConfigProjectConfigurePage from "../../pageObjects/MultiConfigProjectConfigurePage";
import MultiConfigProjectPage from "../../pageObjects/MultiConfigProjectPage";
import multiconfigProjectData from "../../fixtures/pom_fixtures/multiconfigProjectData.json"

describe('multiconfigProject', () => {
    const homePage = new HomePage();
    const multiConfigProjectConfigurePage = new MultiConfigProjectConfigurePage();
    const multiConfigProjectPage = new MultiConfigProjectPage();

    beforeEach('createMultiConfigProject', () => {
        cy.createMultiConfigProject(multiconfigProjectData.projectName)
    })

    it('Create Multiconfiguration project', function () {
        homePage
            .clickDashboardBreadcrumbsLink()
            .getProjectNameLink()
            .should('be.visible')
            .and('have.text', multiconfigProjectData.projectName)
    })

    it('TC_03.07.001 | New Item > Create Multiconfiguration project > Verify left-side menu items', () => {
        multiConfigProjectConfigurePage
            .getConfigSection()
            .should('have.text', 'Configure')
        multiConfigProjectConfigurePage
            .getSidePanel()
            .should('be.visible')
        multiConfigProjectConfigurePage
            .getSideTasksMenu()
            .should('have.length', multiconfigProjectData.expectedSideMenuItemsLength)
            .then(($els) => {
                return Cypress.$.makeArray($els)
                    .map($el => $el.innerText)
            }).should('deep.equal', multiconfigProjectData.expectedSideMenuItems)
    })

    it("TC_03.07.002 | New Item > Create Multiconfiguration project > Add Description", () => {
        multiConfigProjectConfigurePage.typeValueToTheDescrioinTextArea(multiconfigProjectData.descriptionText)
            .clickSaveButton()
            .getCreatedDescription()
            .should("be.visible")
            .and("have.text", multiconfigProjectData.descriptionText);
    });

    it("TC_03.07.003 | New Item > Create Multiconfiguration project > Disable project", () => {
        multiConfigProjectConfigurePage.disableMultiConfigProject(multiconfigProjectData.enabledProjectLabel,
            multiconfigProjectData.disabledProjectLabel)
            .clickSaveButton()
            .getWarningDisabledProjectMessage()
            .should("be.visible")
            .and("include.text", multiconfigProjectData.warningDisabledProjectMessage);

        multiConfigProjectPage.getEnableProjectButton()
            .should("be.visible");
    });
})
