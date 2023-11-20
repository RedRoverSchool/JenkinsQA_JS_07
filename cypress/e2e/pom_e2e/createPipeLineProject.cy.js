/// <reference types="cypress"/>
import HomePage from "../../pageObjects/HomePage";
import multiconfigProjectData from "../../fixtures/pom_fixtures/multiconfigProjectData.json";

describe("multiconfigProject", () => {
  const homePage = new HomePage();

  it("RF | POM > TC_03.04.004 | Create Pipeline project", function () {
    homePage
      .clickgetNewItemLinkSidePanel()
      .fillInputNameField(multiconfigProjectData.projectName)
      .clickMultiConfigTypeOfProjectBtn()
      .clickOKButtonFreestyle();

    homePage
      .clickDashboardBreadcrumbsLink()
      .getProjectNameLink()
      .should("be.visible")
      .and("have.text", multiconfigProjectData.projectName);
  });
});
