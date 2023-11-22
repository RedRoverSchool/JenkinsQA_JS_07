/// <reference types="cypress"/>
import HomePage from "../../pageObjects/HomePage";
import freestyleProjectData from "../../fixtures/pom_fixtures/freestyleProjectData.json"

describe("createFreestyleProject", () => {
  const homePage = new HomePage();

  it("Create Freestyle project", () => {
    homePage
      .clickNewItemLink()
      .fillInputNameField(freestyleProjectData.projectName)
      .clickFreestyleTypeOfProjectBtn()
      .clickOKButtonFreestyle();

    homePage
      .clickDashboardBreadcrumbsLink()
      .getProjectNameLink()
      .should("be.visible")
      .and("have.text", freestyleProjectData.projectName);
  });
});
