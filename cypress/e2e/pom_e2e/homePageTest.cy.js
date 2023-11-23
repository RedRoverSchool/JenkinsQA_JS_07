/// <reference types="cypress"/>
import { sideMenu } from "../../fixtures/pom_fixtures/homePageData.json"
import HomePage from "../../pageObjects/HomePage"

describe('homePageTest', () => {
    const homePage = new HomePage();

    sideMenu.sidePanelName.forEach((item, index) => {
        it(`Verify side menu link ${item} functionality`, function () {
            homePage.clickSideMenuItemList(item, index)
                .should('contain', sideMenu.sidePanelLink[index])

            cy.contains(sideMenu.pageHeaderName[index])
        })
    })
})
