/// <reference types="cypress"/>

import NewJobPage from "../../pageObjects/NewJobPage";
import HomePage from "../../pageObjects/HomePage";
import newJobPageData from "../../fixtures/pom_fixtures/newJobPageData.json"

describe('newJobPage', () => {

    const newJobPage = new NewJobPage();
    const newHomePage = new HomePage();
    const data = newJobPageData;

    beforeEach(function() {

        newHomePage.clickNewItem();

    });
    
    it('TC_03.02.003 | Verify the user is able to see an empty field warning after pointing a cursor out of the Item Name input field', () => {

        newJobPage.getEmptyFieldWarning()
                  .should('have.class', 'input-message-disabled')
                  .and('not.be.visible');

        newJobPage.clickHeader();

        newJobPage.getEmptyFieldWarning()
                  .should('not.have.class', 'input-message-disabled')
                  .and('have.text', data.emptyFieldWarning)
                  .and('be.visible');

    });

    it('TC_03.02.004 | Verify the user is able to see an empty field warning after choosing the "Freestyle Project" from the option list', () => {

        newJobPage.getEmptyFieldWarning()
                  .should('have.class', 'input-message-disabled')
                  .and('not.be.visible');
        
        newJobPage.clickFreestyleTypeOfProjectBtn();

        newJobPage.getEmptyFieldWarning()
                  .should('not.have.class', 'input-message-disabled')
                  .and('have.text', data.emptyFieldWarning)
                  .and('be.visible');

    });

});