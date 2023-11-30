/// <reference types="cypress"/>
import HomePage from "../../pageObjects/HomePage";
import folderConfigureData from "../../fixtures/pom_fixtures/folderConfigureData.json";
import FolderPage from "../../pageObjects/FolderPage";
import FolderConfigurePage from "../../pageObjects/FolderConfigurePage";


describe("folderConfigure", () => {
  const homePage = new HomePage();
  const folderPage = new FolderPage();
  const folderConfigurePage = new FolderConfigurePage();
  let baseURL;
  let folderConfigurePageUrl;

  beforeEach("createNewFolder", () => {
    homePage
      .clickNewItemLink()
      .fillInputNameField(folderConfigureData.folderName)
      .clickFolderBtn()
      .clickOKButtonFolder();
  });

  before(() => {
    cy.createBaseURL().then((result) => {
      baseURL = result;
      folderConfigurePageUrl = folderConfigurePage.createFolderConfigurePageUrl(
        baseURL,
        folderConfigureData.jobJenkinsPageEndpoint,
        folderConfigureData.folderName,
        folderConfigureData.folderConfigurePageEndpoint
      );
    });
  });

  it('TC_07.03.001 | Folder > Configure > Verify link "Configure" on the folder page', () => {
    folderConfigurePage
      .clickSaveBtn()
      .clickConfigureLink()
      .getFolderConfigurePageUrl()
      .should("equal", folderConfigurePageUrl);

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
    folderConfigurePage
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

  it('TC_07.03.008| Folder > Configure > The link “General” is active by default', () => {
    folderConfigurePage
    .getGeneralLink()
    .should("have.class", "task-link--active");
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

  it("TC_07.03.005 | Folder > Configure > Verify 'Apply' button functionality and confirmation message", () => {
    folderConfigurePage
      .getApplyBtn()
      .should("be.visible")
      .and("have.text", folderConfigureData.applyButtonText);

    folderConfigurePage
      .clickApplyBtn()
      .getFolderConfigurePageUrl()
      .should("equal", folderConfigurePageUrl);

    folderConfigurePage
      .getNotificationBar()
      .should("be.visible")
      .and("have.text", folderConfigureData.applyButtonNotification);
  });

  it('TC_07.03.009 | Folder > Configure > Verify that the section “Health metrics” contains a spoiler “Health metrics”', () => {
    folderConfigurePage
      .clickHealthMetricsBtn()
      .getHealthMetricsBtn()
      .should("have.attr", folderConfigureData.healthMetricsSpoilerAttribute,"true");

    folderConfigurePage
      .getAddMetricBtn()
      .should("be.visible")
      .and("have.text", folderConfigureData.healthMetricsSpoiler);
  });

  it("TC_07.03.010 | Folder > Configure > Verify that section “Properties” has text “Pipeline Libraries”.", () => {
    folderConfigurePage
      .getPipelineLibrariesText()
      .should("be.visible")
      .then(($element) => {
        expect($element.text().replace(/\n/g, "").trim()).to.equal(
          folderConfigureData.pipelineLibrariesText
        );
      });
  });
});
