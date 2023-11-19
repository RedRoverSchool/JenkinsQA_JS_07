/// <reference types="cypress"/>

import HomePage from "../../pageObjects/HomePage";
import HeaderAndFooter from "../../pageObjects/HeaderAndFooter";

describe('verifyLogoAndTitle',() => {
    const homePage = new HomePage();
    const headerAndFooter = new HeaderAndFooter()

    it('TC_02.02.003 | Verify visibility of Jenkins logo and title on Dashboard page',function () {

        headerAndFooter.getJenkinsLogo()
            .should('be.visible')

        headerAndFooter.getJenkinsTitle()
            .should('be.visible')

        homePage
            .clickPeopleLink()
            .clickJenkinsHomeLink()

        headerAndFooter.getJenkinsLogo()
            .should('be.visible')

        headerAndFooter.getJenkinsTitle()
            .should('be.visible')
            
    });
});