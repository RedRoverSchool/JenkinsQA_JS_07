/// <reference types="cypress"/>
import HomePage from "../../pageObjects/HomePage";
import dashboardWelcomedMessageData from "../../fixtures/pom_fixtures/dashboardWelcomedMessageData.json";

describe("dashboardWelcomedMessage", () => {
  const homePage = new HomePage();

  it("TC_02.03.006 | Dashboard > Welcomed message> Verify the Welcome Message", () => {
    homePage
      .getWelcomedMessageHeader()
      .should("be.visible")
      .and("have.text", dashboardWelcomedMessageData.welcomedMessageHeader);
  });

  it("TC_02.03.014 |Dashboard > Welcomed message> Verify the title explaining how to start working in Jenkins", () => {
    homePage
      .getJenkinsStartWorkTitle()
      .should("be.visible")
      .and("have.text", dashboardWelcomedMessageData.jenkinsStartWorkTitleText);
  });
});
