/// <reference types="cypress"/>

import HomePage from "../../pageObjects/HomePage";
import FolderPage from "../../pageObjects/FolderPage";

import folderConfigureData from "../../fixtures/pom_fixtures/folderConfigureData.json";
import folderPageData from "../../fixtures/pom_fixtures/folderPageData.json";

describe("folderDescription", () => {
  const homePage = new HomePage();
  const folderPage = new FolderPage();

  beforeEach("createNewFolder", () => {
    cy.createNewFolder(folderConfigureData.folderName);
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

  it("TC_07.02.009 | Verify text input field appears when hit on “Add description” button", () => {
    folderPage
      .clickAddDescriptionLink()
      .getInputField()
      .should("be.visible")
      .should("have.value", "");

    folderPage
      .typeInputField(folderPageData.fDText)
      .getInputField()
      .should("have.value", folderPageData.fDText);
  });

  it(`TC_07.02.010 |Check Preview field with text and ${folderPageData.hidePreviewLinkNam} link appear after clicking on ${folderPageData.previewLinkName}`, () => {
    folderPage
      .clickAddDescriptionLink()
      .getInputField()
      .should("be.visible")
      .should("have.value", "");

    folderPage
      .typeInputField(folderPageData.fDText)
      .getInputField()
      .should("have.value", folderPageData.fDText)

    folderPage
      .clickPreviewLink()
      .getTextAreaPreview()
      .should("be.visible")
      .and("have.text", folderPageData.fDText);

    folderPage
    .getHidePreviewLink().should("be.visible");
  });


  it(`TC_07.02.011 |Check ${folderPageData.hidePreviewLinkName} link`, () => {

    folderPage
      .clickAddDescriptionLink()
      .typeInputField(folderPageData.fDText)
      .clickPreviewLink()
      .clickHidePreviewLink ()

      .getTextAreaPreview()
      .should('not.be.visible')

      folderPage
      .getHidePreviewLink()
      .should('not.be.visible')
  
});


it(`TC_07.02.012 |Check saving description text `, () => {

  folderPage
    .clickAddDescriptionLink()
    .typeInputField(folderPageData.fDText)
    .clickSaveButton()
    .getDescriptionText()
    .should("be.visible")
    .and("contain", folderPageData.fDText)
   
    folderPage
    .getAddDescriptionLink()
    .should("be.visible")
    .and("contain", folderPageData.editDescriptionBtn)

});

});

