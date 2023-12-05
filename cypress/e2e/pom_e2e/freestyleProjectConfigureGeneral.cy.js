/// <reference types="cypress"/>

import HomePage from "../../pageObjects/HomePage";
import NewJobPage from "../../pageObjects/NewJobPage";
import FreestyleProjectConfigurePage from "../../pageObjects/FreestyleProjectConfigurePage";
import freestyleProjectData from "../../fixtures/pom_fixtures/freestyleProjectData.json";

describe ('freestyleProjectGeneralSection', () => {

    const homePage = new HomePage();
    const newJobPage = new NewJobPage();
    const freestyleProjectConfigurePage = new FreestyleProjectConfigurePage();
    const data = freestyleProjectData;

    beforeEach('createFreestyleProject', () => {

        homePage.clickNewItemLink()
        newJobPage.fillInputNameField(data.projectName)
                .clickFreestyleTypeOfProjectBtn()
                .clickOKButton()

    })

    it('TC_04.01.011 | Freestyle > General Verify that General section is displayed on Configuration page', function(){

        freestyleProjectConfigurePage.getGeneralSection()
                                     .should('be.visible')
                                     .and('contain', data.configure.general.sectionName);
    })

    it('TC_04.01.012 | Freestyle > Verify that user is able to disable the project', function(){

        freestyleProjectConfigurePage.getGeneralSectionToggleBtnEnabled()
                                     .should('have.text', data.configure.general.statusEnabled)
                                     .and('be.visible');
        
        freestyleProjectConfigurePage.clickGeneralSectionToggleBtn();


        freestyleProjectConfigurePage.getGeneralSectionToggleBtnDisabled()
                                     .should('have.text', data.configure.general.statusDisabled)
                                     .and('be.visible')
    })

    it('TC_04.01.005 | Verify the user is able to enter a description in the text box', function() {

        freestyleProjectConfigurePage.getDescriptionField()
                                     .type(data.configure.description.sectionName)
                                     .should('have.value', data.configure.description.sectionName);

    });

    it('TC_04.01.006 | Verify the user is able to see all options with check boxes', function() {

        freestyleProjectConfigurePage.getGeneralSectionOptions().each(($el, i) => {
            cy.wrap($el).should('have.text', data.configure.general.options[i]).and('be.visible');
        });
        freestyleProjectConfigurePage.getGeneralSectionLastOption()
                                     .should('have.text', data.configure.general.option)
                                     .and('be.visible');

    });
});