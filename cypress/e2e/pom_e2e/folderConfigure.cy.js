/// <reference types="cypress"/>
import HomePage from "../../pageObjects/HomePage";
import folderConfigureData from "../../fixtures/pom_fixtures/folderConfigureData.json";
import FolderPage from "../../pageObjects/FolderPage";

describe("folderConfigure", () => {
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

  it('TC_07.03.001 | Folder > Configure > Verify link "Configure" on the folder page', () => {
    folderPage
      .clickConfigureLink()
      .checkFolderConfigurePageUrl()
      .getConfigureBreadcrumbsItem()
      .should("be.visible")
      .and("have.text", folderConfigureData.ConfigureBreadcrumbsItem);
  });
});
