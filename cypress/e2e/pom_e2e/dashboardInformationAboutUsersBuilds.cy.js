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
});