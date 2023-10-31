/// <reference types="cypress"/>
import dashboardCommandPanelData from "../fixtures/dashboardCommandPanel.json"

describe("dashboardCommandPanel", () => {
  it("TC_02.04.08 |  Dashboard > Command panel on the left side > Verify tasks items in the sidebar menu", () => {
    cy.get("div.task")
      .then(($els) => {
        return Cypress.$.makeArray($els).map(($els) => $els.innerText);
      })
      .should("have.length", "5")
      .and("deep.equal", dashboardCommandPanelData.allTasks);
  });
  
});
