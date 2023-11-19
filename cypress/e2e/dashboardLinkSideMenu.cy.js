/// <reference types="cypress"/>
import dbLinkSideMenu from '../fixtures/dbSideMenuLink.json'
describe('dashboardLinkSideMenu',()=>{
    dbLinkSideMenu.pageHeaderName.forEach((el,ind)=>{
        it(`TC_02.04.25|Dashboard>Link Side menu| Verify side menu link ${dbLinkSideMenu.sidePanelName[ind]}`,()=>{
            cy.get('#side-panel #tasks span a').eq(ind).click()
            cy.url('contains',dbLinkSideMenu.sidePanelLink[ind])
            cy.contains(dbLinkSideMenu.pageHeaderName[ind]);
        })
    })
})