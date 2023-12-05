/// <reference types="cypress"/>

import HomePage from "../../pageObjects/HomePage";
import NewJobPage from "../../pageObjects/NewJobPage";
import FreestyleProjectConfigurePage from "../../pageObjects/FreestyleProjectConfigurePage";
import freestyleProjectData from "../../fixtures/pom_fixtures/freestyleProjectData.json";

describe("configureNewFreestyleProject", function () {
  const homepage = new HomePage();
  const newjobpage = new NewJobPage();
  const freestyleprojectconfigurepage = new FreestyleProjectConfigurePage();

  beforeEach(() => {
    homepage
      .clickNewItemLink()
      .fillInputNameField(freestyleProjectData.projectName)
      .clickFreestyleTypeOfProjectBtn()
      .clickOKButton();
  });

  it("RF | POM | TC_03.03.001 | Create Freestyle Project > Configure new Freestyle project> Verify that General page is displayed", function () {
    freestyleprojectconfigurepage
      .getGeneralSection()
      .should("be.visible")
      .and("have.text", freestyleProjectData.configure.general.sectionName);
  });

  it("RF | POM | TC_03.03.005 | Create Freestyle Project > Configure new Freestyle project > Verify that user sees the description field", function () {
    freestyleprojectconfigurepage
      .getMainPannel()
      .contains(freestyleProjectData.configure.description.sectionName)
      .should("be.visible");

    freestyleprojectconfigurepage.getDescriptionField().should("be.visible");
  });

  it("POM | TC_03.03.006 | Create Freestyle Project > Configure new Freestyle project> Verify that the list of sections: Source Code Management, Build Triggers, Build Environment, Build Steps, Post-build Actions are displayed", function () {
    freestyleprojectconfigurepage
    .getSectionsNames()
    .each(($els, index) => {
      cy.wrap($els)
        .should("be.visible")
        .and("contain.text", freestyleProjectData.configure.sections[index]);
    });
  });
});
