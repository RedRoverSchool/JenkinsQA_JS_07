/// <reference types="cypress"/>

import HomePage from "../../pageObjects/HomePage";
import NewJobPage from "../../pageObjects/NewJobPage";
import FreestyleProjectConfigurePage from "../../pageObjects/FreestyleProjectConfigurePage";
import freestyleProjectData from "../../fixtures/pom_fixtures/freestyleProjectData.json";

describe("configureNewFreestyleProject", function () {
  const homepage = new HomePage();
  const newjobpage = new NewJobPage();
  const freestyleprojectconfigurepage = new FreestyleProjectConfigurePage();

  it("RF | POM | TC_03.03.005 | Create Freestyle Project > Configure new Freestyle project > Verify that user sees the description field", function () {
    homepage
      .clickNewItemLink()
      .fillInputNameField(freestyleProjectData.projectName)
      .clickFreestyleTypeOfProjectBtn()
      .clickOKButton();

    freestyleprojectconfigurepage
      .getMainPannel()
      .contains(freestyleProjectData.configure.description.sectionName)
      .should("be.visible");

    freestyleprojectconfigurepage.getDescriptionField().should("be.visible");
  });
});
