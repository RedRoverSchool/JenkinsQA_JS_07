/// <reference types="cypress"/>

import {sectionItemsHeaders} from '../fixtures/manageJenkinsTools.json';

describe('manageJenkinsToolsTest', () => {
  it('TC_09.06.008 | Go to the "Tools" page', () => {
    cy.get('a[href="/manage"]').click();
    cy.location('pathname').should('eq', '/manage/');
    cy.get('a[href="configureTools"]').click();
    cy.get(
      '#breadcrumbs .jenkins-breadcrumbs__list-item:nth-last-of-type(2)'
    ).should('have.text', sectionItemsHeaders.tools);
  });
});
