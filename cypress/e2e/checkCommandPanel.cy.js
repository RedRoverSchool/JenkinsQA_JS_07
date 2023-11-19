import header from "../fixtures/checkCommPanel.json";

describe('checkCommandPanel', function () {
    beforeEach(function () {
        cy.get("#side-panel #tasks a").as("sideMenuLink");
    });

   header.sideMenu.forEach((linkName, ind) => {
    it(`See side menu link ${linkName} functionality`, function ()  {
        cy.wrap(this.sideMenuLink[ind]).click();

       
        
        cy.contains(header.headerPage[ind]);
    });
  });
});
