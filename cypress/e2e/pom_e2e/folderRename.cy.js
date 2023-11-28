/// <reference types="cypress"/>

import HomePage from "../../pageObjects/HomePage";
import FolderPage from "../../pageObjects/FolderPage";
import {folderName, folderNewName, invalidCharacters} from "../../fixtures/pom_fixtures/folderConfigureData.json";
import FolderConfigurePage from "../../pageObjects/FolderConfigurePage";
import {textErrorMessage, errorMessage} from "../../fixtures/pom_fixtures/folderPageData.json";

describe("folderRename ", () => {
  const homePage = new HomePage();
  const folderPage = new FolderPage();
  const folderConfigurePage = new FolderConfigurePage();

  beforeEach("createNewFolder", () => {
    homePage
      .clickNewItemLink()
      .fillInputNameField(folderName)
      .clickFolderBtn()
      .clickOKButtonFolder()
      .clickSaveBtn();
  });

  it("TC_07.06.002| Verify the new name folder", () => {
    folderPage
      .renameFolder(folderNewName)
      .getNewFolderName()
      .should("be.visible")
      .and("contain", folderNewName);
  });

  invalidCharacters.forEach((char) => {
    it(`AT_07.06.003 | Creating a new folder using special characters ${char}`, () => {
      folderPage.renameFolder(folderName + char);

      folderConfigurePage
        .getErrorMessage()
        .should("be.visible")
        .and("contain", errorMessage);
    });
  });

  it("TC_07_06_004| Rename a folder with the same name", () => {
    folderPage.renameFolder(folderName);

    folderConfigurePage
      .getErrorMessageText()
      .should("be.visible")
      .and("contain.text", textErrorMessage);
  });
});
