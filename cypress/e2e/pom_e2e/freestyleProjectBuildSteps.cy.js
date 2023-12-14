/// <reference types="cypress"/>
import FreestyleProjectConfigurePage from "../../pageObjects/FreestyleProjectConfigurePage";
import freestyleProjectData from "../../fixtures/pom_fixtures/freestyleProjectData.json";

describe("freestyleProjectBuildSteps", () => {
  const freestyleProjectConfigurePage = new FreestyleProjectConfigurePage();

  beforeEach("createFreestyleProject", () => {
    cy.createFreestyleProject(freestyleProjectData.projectName);
  });

  it("TC_04.05.001 | Freestyle project > Build Steps > Verify 'Build Steps' section is displayed", () => {
    freestyleProjectConfigurePage
      .clickBuildStepsOptions()
      .getBuildStepsSection()
      .should("be.visible")
      .and("contain", freestyleProjectData.buildStepsSectionHeader);
  });
});
