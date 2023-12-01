/// <reference types="cypress"/>

import HomePage from "../../pageObjects/HomePage";
import NewJobPage from "../../pageObjects/NewJobPage";
import FreestyleProjectConfigurePage from "../../pageObjects/FreestyleProjectConfigurePage";
import data from "../../fixtures/pom_fixtures/freestyleProjectData.json";

describe ('freestyleProjectGeneralSection', () => {

    const homePage = new HomePage();
    const newJobPage = new NewJobPage();
    const freestyleProjectConfigurePage = new FreestyleProjectConfigurePage();
    const {sectionName, statusDisabled, statusEnabled} = data.configure.general;

    beforeEach('createFreestyleProject', () => {

        homePage.clickNewItemLink()
        newJobPage.fillInputNameField(data.projectName)
                .clickFreestyleTypeOfProjectBtn()
                .clickOKButton()

    })

    it('TC_04.01.011 | Freestyle > General Verify that General section is displayed on Configuration page', function(){

        freestyleProjectConfigurePage.getGeneralSection()
                                     .should('be.visible')
                                     .and('contain', sectionName);
    })

    it('TC_04.01.012 | Freestyle > Verify that user is able to disable the project', function(){

        freestyleProjectConfigurePage.getGeneralSectionToggleBtnEnabled()
                                     .should('have.text', statusEnabled)
                                     .and('be.visible');
        
        freestyleProjectConfigurePage.clickGeneralSectionToggleBtn();


        freestyleProjectConfigurePage.getGeneralSectionToggleBtnDisabled()
                                     .should('have.text', statusDisabled)
                                     .and('be.visible')
})

})