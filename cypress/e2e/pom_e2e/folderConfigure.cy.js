/// <reference types="cypress"/>
import HomePage from "../../pageObjects/HomePage";
import folderConfigureData from "../../fixtures/pom_fixtures/folderConfigureData.json";
import FolderPage from "../../pageObjects/FolderPage";
import FolderConfigurePage from "../../pageObjects/FolderConfigurePage";
const HOST = Cypress.env("local.host");
const PORT = Cypress.env("local.port");

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
  });

  it('TC_07.03.001 | Folder > Configure > Verify link "Configure" on the folder page', () => {
    folderConfigurePage
      .clickSaveBtn()
      .clickConfigureLink()
      .getFolderConfigurePageUrl().should(
        "equal",
        `http://${HOST}:${PORT}/job/${folderConfigureData.folderName}/configure`
      );

      folderConfigurePage
      .getConfigureBreadcrumbsItem()
      .should("be.visible")
      .and("have.text", folderConfigureData.configureBreadcrumbsItem);
  });

  it('TC_07.03.002 | Folder > Configure > The "Display Name" and "Description" fields in the General section are text input fields', () => {
    folderConfigurePage
      .fillInputDisplayName(folderConfigureData.inputDisplayName)
      .fillInputDescription(folderConfigureData.inputDescription)
      .clickSaveBtn();

    folderPage
      .getDisplayFolderName()
      .should("be.visible")
      .and("contain", folderConfigureData.inputDisplayName);

    folderPage
      .getDiscriptionFolderMessage()
      .should("be.visible")
      .and("have.text", folderConfigureData.inputDescription);
  });

  it("TC_07.03.003 | Folder > Configure > Left menu content check", () => {
    folderConfigurePage
      .getSideMenu()
      .should("be.visible")
      .then(($els) => {
        return Cypress.$.makeArray($els).map(($el) => $el.innerText);
      })
      .should("deep.equal", folderConfigureData.sidePanelFolderConfig);
  });

  it("TC_07.03.006 | Folder > Configure>check side panel has clickable links", () => {
    folderPage
      .clickHealthMetricsBtn()
      .clickPropertiesAddBtn()
      .getSidePanelLinks()
      .each(($link) => {
        cy.wrap($link)
          .click()
          .should("be.visible")
          .and("have.class", "task-link--active");
      });
  });

  it("TC_07.03.007| Folder > Configure > The button “Save” is visible and clickable", () => {
    folderConfigurePage
      .getSaveBtn()
      .should("be.visible");

    folderConfigurePage
      .clickSaveBtn()
      .getFolderPageUrl()
      .should("include", folderConfigureData.folderName);

    folderPage
      .getDisplayFolderName()
      .should("contain", folderConfigureData.folderName);
  });
});

