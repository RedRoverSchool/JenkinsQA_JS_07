/// <reference types="cypress"/>

import cloud from '../fixtures/dashboardDistributedBuild.json'

describe('open Configure a Cloud', () => {
    it('TC_02.08.004 | Dashboard > verify "Configure a cloud" Link', () => {
        cy.get('#main-panel > div:nth-child(3) > div > section:nth-child(4) > h2')
            .should('have.text', cloud.Title);
  
        cy.get('a[href="cloud/"]').should('be.visible');

        cy.get('a[href="cloud/"]').click();

        cy.get('.jenkins-app-bar__content').should('have.text', cloud.Clouds);
    });
});