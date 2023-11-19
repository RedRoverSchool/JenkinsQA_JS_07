/// <reference types="cypress"/>

import HomePage from "../../pageObjects/HomePage";
import PeoplePage from "../../pageObjects/PeoplePage";
import homePageData from "../../fixtures/pom_fixtures/homePageData.json"

describe('verifyLogoAndTitle',() => {
    const homePage = new HomePage();
    const peoplePage = new PeoplePage();

    it('TC_02.02.003 | Verify visibility of Jenkins logo and title on Dashboard page', function () {

        homePage.getJenkinsLogo()
            .should('be.visible')
            
        homePage.getJenkinsTitle()
            .should('be.visible')

        homePage
            .clickPeopleLink()

        peoplePage
            .clickJenkinsHomeLink()

        homePage.getWellcomeTitle()
            .should('be.visible')
            .and('have.text', homePageData.greeting)

        homePage.getJenkinsLogo()
            .should('be.visible')

        homePage.getJenkinsTitle()
            .should('be.visible')
    });
});