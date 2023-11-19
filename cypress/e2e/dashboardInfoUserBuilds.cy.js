/// <reference types="cypress"/>

describe("Information about Users builds", function () {
  it("TC_02.05.002 | Dashboard -> Information about Users builds > verify “Build Queue” with no builds", () => {
    cy.get("#executors").should("be.visible");
    cy.get("#buildQueue").then(($buildQueue) => {
        const buildQueueTop = $buildQueue.offset().top;

    cy.get("#executors").then(($executors) => {
        const executorsTop = $executors.offset().top;
        expect(executorsTop).to.be.greaterThan(buildQueueTop);
      });
    });
  });
});
