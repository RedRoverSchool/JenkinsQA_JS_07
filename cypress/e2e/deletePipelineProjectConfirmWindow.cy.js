/// <reference types="cypress"/>

import deletePipelineProjectConfirmWindow from '../fixtures/deletePipelineProjectConfirmWindow.json';

describe('delete pipeline project confirm window', () => {

  beforeEach(() => {
    cy.get('div.task a[href="/view/all/newJob"]').click();
    cy.get('#name').type(deletePipelineProjectConfirmWindow.pipelineProjectName);
    cy.get('[class="label"]').contains(deletePipelineProjectConfirmWindow.jobsType).click();
    cy.get('#ok-button').click();
    cy.get('#jenkins-home-link').click();
  })

  it('TC_05.05.004 | Verify popup confirm window has message', () => {
    cy.get(`td a[href*="job/${deletePipelineProjectConfirmWindow.pipelineProjectName}/"]`).realHover();
    cy.get(`[data-href*="/job/${deletePipelineProjectConfirmWindow.pipelineProjectName}/"]`).click();
    cy.get(`button[href="/job/${deletePipelineProjectConfirmWindow.pipelineProjectName}/doDelete"]`).click();

    cy.on('window:confirm', (str) => {
      expect(str).to.eql(deletePipelineProjectConfirmWindow.windowMessage);
    });
  });

  it('TC_05.05.005 | Verify canceling Delete Pipeline Project', () => {
    cy.get(`td a[href*="job/${deletePipelineProjectConfirmWindow.pipelineProjectName}/"]`).realHover();
    cy.get(`[data-href*="/job/${deletePipelineProjectConfirmWindow.pipelineProjectName}/"]`).click();
    cy.get(`button[href="/job/${deletePipelineProjectConfirmWindow.pipelineProjectName}/doDelete"]`).click();

    cy.on('window:confirm', () => false);
    cy.get('p.jenkins-jobs-list__item__label').should('have.text', deletePipelineProjectConfirmWindow.pipelineProjectName);
  });
}) 