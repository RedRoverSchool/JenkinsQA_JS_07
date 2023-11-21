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
      .clickNewItemLink()
      .fillInputNameField(folderConfigureData.folderName)
      .clickFolderBtn()
      .clickOKButtonFolder()
      .clickSaveBtn();
  });

  it(`TC_07.02.006 | Verify ${folderPageData.previewLinkName} link appears when hit on ${folderPageData.addDescriptionButtonName} button`, () => {
    folderPage
      .clickAddDescriptionLink()
      .getPreviewLink()
      .should("be.visible")
      .and("have.text", folderPageData.previewLinkName);
  });

 
  it(`TC_07.02.007 | Verify ${folderPageData.saveButtonName} button appears when hit on ${folderPageData.addDescriptionButtonName}`, () => {
    folderPage
      .clickAddDescriptionLink()
      .getSaveButton()
      .should("be.visible")
      .and("have.prop", "tagName", "BUTTON")
      .and("have.prop", "innerText", folderPageData.saveButtonName);

  });
});
