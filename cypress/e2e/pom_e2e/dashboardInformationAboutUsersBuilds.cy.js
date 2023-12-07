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
        case buildsInformation.buildsBlockState.collapsed:
          homePage
            .clickBuildQueueBlockArrow()
            .getBuildQueueBlockContent()
            .should("not.have.text", buildsInformation.buildQueueAbsenceMsg);
          break;
        case buildsInformation.buildsBlockState.expanded:
          homePage
            .clickBuildQueueBlockArrow()
            .getBuildQueueBlockContent()
            .should("have.text", buildsInformation.buildQueueAbsenceMsg);
          break;
      }
    });
  });

  it("TC_02.05.003 | Dashboard > Information about User's builds > Check 'Build Executor Status' block visibility", () => {
    homePage
      .getBuildExecutorStatusBlock()
      .should("contain", buildsInformation.buildExecStatusBlockTitle)
      .and("be.visible");
  });

  it("TC_02.05.004 | Dashboard > Information about User's builds > Check that 'Build Executor Status' block is able to expand/collapse", () => {
    homePage.takeBuildExecutorStatusBlockState().then((blockState) => {
      switch (blockState) {
        case buildsInformation.buildsBlockState.collapsed:
          homePage
            .clickBuildExecutorStatusBlockArrow()
            .getBuildExecutorStatusBlockContent()
            .should("have.text", buildsInformation.buildExecStatusCollapsedMsg);
          break;
        case buildsInformation.buildsBlockState.expanded:
          homePage
            .clickBuildExecutorStatusBlockArrow()
            .getBuildExecutorStatusBlockContent()
            .should("have.text", buildsInformation.buildExecStatusExpandedMsg);
          break;
      }
    });
  });
});
