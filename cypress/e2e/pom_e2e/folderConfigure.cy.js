/// <reference types="cypress"/>
import HomePage from "../../pageObjects/HomePage";
import folderConfigureData from "../../fixtures/pom_fixtures/folderConfigureData.json";
import FolderPage from "../../pageObjects/FolderPage";
import FolderConfigurePage from "../../pageObjects/FolderConfigurePage";

describe("folderConfigure", () => {
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

  it('TC_07.03.001 | Folder > Configure > Verify link "Configure" on the folder page', () => {
    folderPage
      .clickConfigureLink()
      .checkFolderConfigurePageUrl()
      .getConfigureBreadcrumbsItem()
      .should("be.visible")
      .and("have.text", folderConfigureData.configureBreadcrumbsItem);
  });

  it('TC_07.03.002 | Folder > Configure > The "Display Name" and "Description" fields in the General section are text input fields',() => {
    folderPage
      .clickConfigureLink()
      .fillInputDisplayName(folderConfigureData.inputDisplayName)
      .fillInputDescription(folderConfigureData.inputDescription)
      .clickSaveBtn()

    folderPage
      .getDisplayFolderName()
      .should('be.visible')
      .and('contain',folderConfigureData.inputDisplayName)

    folderPage
      .getDiscriptionFolderMessage()
      .should('be.visible')
      .and('have.text',folderConfigureData.inputDescription)
  });

  it('TC_07.03.007| Folder > Configure > The button “Save” is visible and clickable', () => {
    folderPage
      .clickConfigureLink()
      .getSaveBtn()
      .should('be.visible');

    folderConfigurePage
      .clickSaveBtn()
      .getFolderPageUrl()
      .should('include', folderConfigureData.folderName);
    
    folderPage
      .getDisplayFolderName()
      .should('contain', folderConfigureData.folderName);
  });
});

