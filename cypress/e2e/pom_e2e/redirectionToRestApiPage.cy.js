/// <reference types="cypress"/>
import HomePage from "../../pageObjects/HomePage";
import RestApiPage from "../../pageObjects/RestApiPage";
import api from "../../fixtures/pom_fixtures/restAPI.json"

describe("redirectionToRESTAPIPage", () => {
  const homePage = new HomePage();
  const restApi = new RestApiPage();

  it("TC_15.01.002 Verify redirection to REST API page", () => {
    homePage.clickRestApilink()

    
        .getUrl()
        .should("include", api.link);
    restApi
        .getApiHeaderText()
        .should("be.visible")
        .and("have.text", api.header);
    restApi
        .getBreadcrumbsApiLink()
        .should("be.visible")
        .and("have.text", api.API);
  });
});
