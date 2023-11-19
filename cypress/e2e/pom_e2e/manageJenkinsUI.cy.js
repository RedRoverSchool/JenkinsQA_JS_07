/// <reference types="cypress"/>
import HomePage from "../../pageObjects/HomePage"
import ManageJenkinsPage from "../../pageObjects/ManageJenkinsPage"
import manageJenkinsUI from "../../fixtures/pom_fixtures/manageJenkinsUI.json"


describe('Manage Jenkins > Title', () => {
    const homePage= new HomePage()
    const manageJenkinsPage = new ManageJenkinsPage()

    beforeEach(() => {
        homePage.clickManageJenkinsLink()
    })

    it('RF | POM > TC_09.01.005 | Manage Jenkins > UI Verification of Header', () =>{
        manageJenkinsPage.getHeaderManageJenkins()
        .should('be.visible')
        .and('have.text', manageJenkinsUI.headerName)
        .and('have.prop', 'tagName', 'H1');

        manageJenkinsPage.getManageJenkinsURL().should('include',manageJenkinsUI.url)
    })
})
