/// <reference types = "cypress"/>
import HomePage from "../../pageObjects/HomePage";
import buildsInformation from "../../fixtures/pom_fixtures/buildsInformation.json";

describe("dashboardInformationAboutUsersBuilds", () => {
  const homePage = new HomePage();

  it("TC_02.05.001 | Dashboard > Information about User's builds > Check 'Build queue' block visibility", () => {
    homePage
      .getBuildQueueBlock()
      .should("contain", buildsInformation.buildQueueBlockTitle)
      .and("be.visible");
  });

  it("TC_02.05.002 | Dashboard > Information about User's builds > Check that 'Build queue' block is able to expand/collapse", () => {
    homePage.takeBuildQueueBlockState().then((blockState) => {
      switch (blockState) {
        case buildsInformation.buildQueueBlockState.collapsed:
          homePage
            .clickBuildQueueBlockArrow()
            .getBuildQueueBlockContent()
            .should("not.have.text", buildsInformation.buildQueueAbsenceMsg);
          break;
        case buildsInformation.buildQueueBlockState.expanded:
          homePage
            .clickBuildQueueBlockArrow()
            .getBuildQueueBlockContent()
            .should("have.text", buildsInformation.buildQueueAbsenceMsg);
          break;
      }
    });
  });
});
