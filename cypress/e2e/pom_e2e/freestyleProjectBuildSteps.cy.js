/// <reference types="cypress"/>
import FreestyleProjectConfigurePage from "../../pageObjects/FreestyleProjectConfigurePage";
import freestyleProjectData from "../../fixtures/pom_fixtures/freestyleProjectData.json";

describe("freestyleProjectBuildSteps", () => {
  const freestyleProjectConfigurePage = new FreestyleProjectConfigurePage();

  beforeEach("createFreestyleProject", () => {
    cy.createFreestyleProject(freestyleProjectData.projectName);
    freestyleProjectConfigurePage.clickBuildStepsOptions()
  });

  it("TC_04.05.001 | Freestyle project > Build Steps > Verify 'Build Steps' section is displayed", () => {
    freestyleProjectConfigurePage
      .getBuildStepsSection()
      .should("be.visible")
      .and("contain", freestyleProjectData.buildStepsSectionHeader);
  });

  it("TC_04.05.002 | Freestyle project > Build Steps > Verify the functionality of the 'Add build step' button", () => {
    freestyleProjectConfigurePage
      .getAddBuildStepBtn()
      .should("be.visible")
      .and("have.text", freestyleProjectData.addBuildStepBtnText)
      .and("have.prop", "tagName", "BUTTON");
    freestyleProjectConfigurePage
      .clickAddBuildStepBtn()
      .getDropDownFilter()
      .should("be.visible");
  });

  it("TC_04.05.003 | Freestyle project > Build Steps > Verify options in drop down menu", () => {
    freestyleProjectConfigurePage
      .clickAddBuildStepBtn()
      .makeArrayOfAddBuildStepDropDownOptions()
      .should(
        "have.length",
        freestyleProjectData.addBuildStepDropDownOptionsQuantity
      )
      .and("deep.equal", freestyleProjectData.addBuildStepDropDownOptions);
  });
});
