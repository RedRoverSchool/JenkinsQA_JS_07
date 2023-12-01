/// <reference types="cypress"/>
import HomePage from "../../pageObjects/HomePage";
import MultiConfigProjectConfigurePage from "../../pageObjects/MultiConfigProjectConfigurePage";
import multiconfigProjectData from "../../fixtures/pom_fixtures/multiconfigProjectData.json"


describe('multiconfigProject', () => {
    const homePage = new HomePage();
    const multiConfigProjectConfigurePage = new MultiConfigProjectConfigurePage();
   
    beforeEach('createMultiConfigProject', () => {
        cy.createMultiConfigProject(multiconfigProjectData.projectName)
    })

    it('Create Multiconfiguration project', function() {
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
})
