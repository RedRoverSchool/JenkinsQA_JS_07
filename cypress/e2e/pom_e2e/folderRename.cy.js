/// <reference types="cypress"/>

import HomePage from "../../pageObjects/HomePage";
import FolderPage from "../../pageObjects/FolderPage";
import folderConfigureData from "../../fixtures/pom_fixtures/folderConfigureData.json";
import FolderConfigurePage from "../../pageObjects/FolderConfigurePage";
import folderPageData from "../../fixtures/pom_fixtures/folderPageData.json"

describe("folderRename ", () => {
  const homePage = new HomePage();
  const folderPage = new FolderPage();
  const folderConfigurePage = new FolderConfigurePage();

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

  it("TC_07.06.003| Attempt to enter invalid characters in new folder name", () => {
    const performInvalidCharacterCheck = (invalidCharacter) => {
      folderPage
        .clickFolderRenameBtn()
        .fillNewNameField(folderConfigureData.folderName + invalidCharacter)
        .clickBtnConfirmRenameFolder();

      folderConfigurePage
        .getErrorMessage()
        .should("be.visible")
        .and("contain", "Error");
      folderPage.getNewFolderName().should("not.contain", invalidCharacter);
      cy.go(-1);
    };
    folderConfigureData.invalidCharacters.forEach((invalidCharacter) => {
      performInvalidCharacterCheck(invalidCharacter);
    });
  });

  it("TC_07_06_004| Rename a folder with the same name", () => {
    folderPage.renameFolder(folderConfigureData.folderName);

    folderConfigurePage
      .getErrorMessageText()
      .should("be.visible")
      .and("contain.text", folderPageData.textErrorMessage);
  });
});
