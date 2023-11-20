/// <reference types="cypress"/>

import HomePage from "../../pageObjects/HomePage";
import folderConfigureData from "../../fixtures/pom_fixtures/folderConfigureData.json";
import FolderPage from "../../pageObjects/FolderPage";
import folderPageData from "../../fixtures/pom_fixtures/folderPageData.json";

describe("folderDescription", () => {
  const homePage = new HomePage();
  const folderPage = new FolderPage();

  beforeEach("createNewFolder", () => {
    homePage
      .clickCreateAJobLink()
      .fillInputNameField(folderConfigureData.folderName)
      .clickFolderBtn()
      .clickOKButtonFolder()
      .clickSaveBtn();
  });

  it("TC_07.02.006 | Verify that an empty input for text field appears when hit on “Add description” button", function () {
    folderPage
      .clickAddDescriptionLink()
      .getPreviewLink()
      .should("be.visible")
      .and("have.text", folderPageData.previewLinkName);
  });
});
