/// <reference types="cypress"/>

import HomePage from "../../pageObjects/HomePage";
import ManageJenkinsPage from "../../pageObjects/ManageJenkinsPage";
import manageJenkinsUIData from "../../fixtures/pom_fixtures/manageJenkinsUIData.json";

describe('Manage Jenkins > Title', () => {
    const homePage = new HomePage();
    const manageJenkinsPage = new ManageJenkinsPage();

    beforeEach(() => {
        homePage.clickManageJenkinsLink();
    })

    it('RF | POM > TC_09.01.005 | Manage Jenkins > UI Verification of Header', () => {
        manageJenkinsPage.getHeaderManageJenkins()
            .should('be.visible')
            .and('have.text', manageJenkinsUIData.headerName)
            .and('have.prop', 'tagName', 'H1');

        manageJenkinsPage.getManageJenkinsURL().should('include', manageJenkinsUIData.url);
    })

    it("TC_09.01.002 | Manage Jenkins > Title > 5 section-headers displays verification", () => {
        manageJenkinsPage.getSubHeadersManageJenkins()
            .should("be.visible")
            .then(($els) => {
                return Cypress.$.makeArray($els).map($el => $el.innerText);
            })
            .and("have.length", manageJenkinsUIData.subHeadersMainJenkinsPageQuantity)
            .and("deep.equal", manageJenkinsUIData.subHeadersMainJenkinsPage);
    });
});
