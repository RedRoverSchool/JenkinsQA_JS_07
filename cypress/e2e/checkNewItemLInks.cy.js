/// <reference types="cypress"/>

import newJobPageData from "../fixtures/newJobPage.json"
import NewJobPage from "../pageObjects/NewJobPage";
import HomePage from "../pageObjects/HomePage";
import HomePageData from "../fixtures/welcomeMessage023.json"

describe('checkNewItemLinks', () => {
   const homePage = new HomePage();

   it('TC_03.01.013-1| + New Item > Check New Item links on the left menu',()=>{
    homePage
    .clickNewItemLink()
    .verifyURL(newJobPageData.URL)
   });
   it.only('TC_03.01.013-2| + New Item > Check New Item links on top bar',()=>{
      homePage
      .clickDropdownMenu()
      // .verifyURL(newJobPageData.url)
     });
     it('TC_03.01.013-3| + New Item > Check New Item links in the center of Page',()=>{
      homePage
      .verifyLinkCreateJob(HomePageData.titleMessage)
      .clickCreateJob()
      .verifyURL(newJobPageData.URL)
     });
});