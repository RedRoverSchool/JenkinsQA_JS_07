/// <reference types="cypress"/>
import HomePage from "../../pageObjects/HomePage";
import NewJobPage from "../../pageObjects/NewJobPage";
import multiconfigProjectData from "../../fixtures/pom_fixtures/multiconfigProjectData.json";

describe("multiconfigProject", () => {
  const homePage = new HomePage();
  const newJobPage = new NewJobPage();

  it("RF | POM > TC_03.04.004 | Create Pipeline project", function () {
    homePage
      .clickNewItemLink()
      .fillInputNameField(multiconfigProjectData.projectName)
      .clickMultiConfigTypeOfProjectBtn()
      .clickOKButtonFreestyle();

    homePage
      .clickDashboardBreadcrumbsLink()
      .getProjectNameLink()
      .should("be.visible")
      .and("have.text", multiconfigProjectData.projectName);
  });

  it('RF | POM > TC_03.04.009 | Check input-validation-message', function () {
    homePage
      .clickNewItemLink()

    newJobPage
      .clickPipelineTypeOfProjectBtn()
      .getInputValidationMessage()
      .should("be.visible") 

    newJobPage  
      .getOKButton()
      .should('be.disabled')  
  })
});
