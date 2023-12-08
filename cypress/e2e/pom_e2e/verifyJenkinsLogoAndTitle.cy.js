/// <reference types = 'cypress'/>

import HomePage from "../../pageObjects/HomePage";
import dashboardWelcomedMessageData from "../../fixtures/pom_fixtures/dashboardWelcomedMessageData.json"

describe('verifyJenkinsLogoAndLTitle', () => {
    const homePage = new HomePage()

    it('TC_02.02.013 | Header > Verify Jenkins Logo is visible and clickable', () => {
        homePage.clickPeopleLink()
                .clickJenkinsLogo()
                .getWelcomedMessageHeader()
                .contains(dashboardWelcomedMessageData.welcomedMessageHeader)
    });
});

