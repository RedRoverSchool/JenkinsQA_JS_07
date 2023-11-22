/// <reference types="cypress" />

const HOST = Cypress.env("local.host");
const PORT = Cypress.env("local.port");

import * as folderCreate from "../fixtures/createFolder.json";
import * as folderConfig from "../fixtures/folderConfigure.json";

describe("folderConfiguration", () => {
  beforeEach("Create Folder project", () => {
    cy.get('a[href="/view/all/newJob"]').click();
    cy.get("#name").type(folderCreate.newFolderName);
    cy.get("li.com_cloudbees_hudson_plugins_folder_Folder").click();
    cy.get("#ok-button").click();
    cy.get('button[name="Submit"]').click();
    switch (Cypress.currentTest.title) {
      case 'TC_07.03.003.01 | Folder > Configure > Navigation to "Configure" page check':
        break;
      default:
        cy.get(
          `a[href="/job/${folderCreate.newFolderName}/configure"]`
        ).click();
    }
  });
// IMPLEMENTED BY PAVEL
  it('TC_07.03.003.01 | Folder > Configure > Navigation to "Configure" page check', () => {
    cy.get(`a[href="/job/${folderCreate.newFolderName}/configure"]`).click();
    cy.url().should(
      "eql",
      `http://${HOST}:${PORT}/job/${folderCreate.newFolderName}/configure`
    );
    cy.get('.jenkins-breadcrumbs__list-item[aria-current="page"]').should(
      "have.text",
      folderConfig.breadcrumbsConfigurationPage
    );
  });
// IN PROGRESS
  it("TC_07.03.003.02 | Folder > Configure > Left menu consistency check", () => {
    cy.get("div.task")
      .should("have.length", 3)
      .and("be.visible")
      .then(($els) => {
        const folderConfigSideMenu = Cypress.$.makeArray($els).map(
          ($el) => $el.innerText
        );
        expect(folderConfigSideMenu).to.deep.equal(
          folderConfig.sidePanelFolderConfig
        );
      });
  });

  it('TC_07.03.003.03 | Folder > Configure > Link "General" activity check', () => {
    cy.get('button[data-section-id="general"]')
      .should("have.class", "task-link--active")
      .and("be.visible");
  });

  it("TC_07.03.003.04 | Folder > Configure > Sections focusing by click on the page check", () => {
    cy.get("button.repeatable-add").click();

    cy.scrollTo("bottom");
    cy.get('button[data-section-id="properties"]').click().wait(500);
    cy.get("div#properties")
      .window()
      .then(($window) => {
        expect($window.scrollY).to.be.closeTo(300, 300);
      });

    cy.scrollTo("bottom");
    cy.get('button[data-section-id="general"]').click().wait(500);
    cy.get("h2#general")
      .window()
      .then(($window) => {
        expect($window.scrollY).to.be.closeTo(200, 200);
      });

    cy.scrollTo("bottom");
    cy.get('button[data-section-id="health-metrics"]').click().wait(500);
    cy.get("div#health-metrics")
      .window()
      .then(($window) => {
        expect($window.scrollY).to.be.closeTo(300, 300);
      });
  });
// IMPLEMENTED BY NATALY
  it('TC_07.03.003.05 | Folder > Configure > "General" section consistency check', () => {
    cy.get('input[name="_.displayNameOrNull"]').should("be.visible");
    cy.get('textarea[name="_.description"]').should("be.visible");
  });

  it('TC_07.03.003.06 | Folder > Configure > "Health metrics" section consistency check', () => {
    cy.get("button.advanced-button").contains("Health metrics").click();
    cy.get("#yui-gen1-button")
      .should("be.visible")
      .and("have.text", "Add metric");
  });

  it('TC_07.03.003.07 | Folder > Configure > "Properties" section consistency check', () => {
    cy.get('#properties').next().should('contain', 'Pipeline Libraries')
  })

  it('TC_07.03.003.08 | Folder > Configure > Button "Save" check', () => {
    cy.get('button[name="Submit"]').should('be.visible').and('not.be.disabled')
  })

  it('TC_07.03.003.09 | Folder > Configure > Button "Apply" check', () => {
    cy.get('button[name="Apply"]').should('be.visible').and('not.be.disabled')
  })

  it('TC_07.03.003.10 | Folder > Configure > Button "Apply" functionality check', () => {
    cy.get('button[name="Apply"]').click()
    cy.get('div#notification-bar').should('be.visible')
  })

  it.only('TC_07.03.003.11 | Folder > Configure > Button "Save" functionality check', () => {
    cy.get('textarea[name="_.description"]').type('Description test content')
    cy.get('button[name="Submit"]').click()
    cy.url().should('contain', `/job/${folderCreate.newFolderName}/`)
    cy.get('h1 [title="Folder"]').parent().should('contain', `${folderCreate.newFolderName}`)
    cy.get('div#view-message').should('have.text', 'Description test content')
})
});
