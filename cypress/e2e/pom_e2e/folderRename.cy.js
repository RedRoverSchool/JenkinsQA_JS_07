/// <reference types="cypress"/>

import HomePage from "../../pageObjects/HomePage";
import FolderPage from "../../pageObjects/FolderPage";
import folderConfigureData from "../../fixtures/pom_fixtures/folderConfigureData.json";

describe("folderRename ", () => {
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
  it("TC_07.06.002| Verify the new name folder", () => {
    folderPage
      .clickFolderRenameBtn()
      .fillNewNameField(folderConfigureData.folderNewName)
      .clickBtnConfirmRenameFolder()
      .getNewFolderName()
      .should("be.visible")
      .and("contain", folderConfigureData.folderNewName);
  });
});
