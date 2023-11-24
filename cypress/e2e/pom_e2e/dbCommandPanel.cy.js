/// <reference types="cypress"/>
import HomePage from "../../pageObjects/HomePage";
import dbCommandPanelData from "../../fixtures/pom_fixtures/dbCommandPanelData.json"

describe('dbCommandPanel',()=>{
    const homePage = new HomePage()

dbCommandPanelData.sidePanel.forEach((el,idx)=>{
    it('POM>TC_02.04.21 | Dashboard > Command panel on the left side and Verify side panel menu links  functionality',()=>{
        homePage.clickSideMenuPanelItem(idx)
        .should('contain',dbCommandPanelData.link[idx])
        homePage.getContainsText(idx)
               
        })
    })

    
})
