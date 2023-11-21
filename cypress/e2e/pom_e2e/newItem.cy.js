/// <reference types="cypress"/>

import HomePage from "../../pageObjects/HomePage";
import NewJobPage from "../../pageObjects/NewJobPage";
import NewJobPageData from "../../fixtures/pom_fixtures/newJobPageData.json";

describe("New item", () => {
  const homePage = new HomePage();
  const newJobPage = new NewJobPage();

  it("RF | POM>TC_03.01.006 | New Item>Click new item", () => {
    homePage.clickNewItemLink()
            .checkNewJobPageUrl();
    newJobPage.getNewJobPageTitle()
              .should("have.text", NewJobPageData.title);
  });
});
