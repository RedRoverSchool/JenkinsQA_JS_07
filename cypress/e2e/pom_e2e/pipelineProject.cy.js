/// <reference types="cypress"/>
import HomePage from "../../pageObjects/HomePage";
import PipelineConfigurePage from "../../pageObjects/PipelineConfigurePage";
import pipelineProjectData from "../../fixtures/pom_fixtures/pipelineProjectData.json";
import{sizeValue} from "../../fixtures/pom_fixtures/homePageData.json"

describe('New Item > Create Pipeline Project > Configure new Pipeline project', () => {
    const homePage = new HomePage();
    const pipelineConfigurePage = new PipelineConfigurePage();

    beforeEach("createPipelineProject", () => {
      cy.createPipelineProject(pipelineProjectData.projectName)
    });
   
    it('TC_03.05.005 | New Item > Create Pipeline Project > Configure new Pipeline project > Check the help button Discard old builds', () => {
    pipelineConfigurePage
         .clickDiscardOldBuildsHelpBtn()
         .getDiscardOldBuildsHelpText()
         .should('be.visible')
         .wait(2000)      
         .then($el =>  {
            expect($el.get(0).innerText).to.eq(pipelineProjectData.discardOldBuildsHelpText);                   
         });
   });

   it('TC_03.05.019|New Item> Create Pipeline Project|Verify size of project table S ',()=>{
      
      homePage.clickDashboardBreadcrumbsLink()
              .clickButtonIconSizeSmall()
      homePage.getBuildStatusIcon()
               .then((el) => {
        expect(window.getComputedStyle(el[0]).getPropertyValue('--table-padding')).to.equal('0.2rem');
      }); 
   });

      it('TC_03.05.019|New Item> Create Pipeline Project|Verify size of project table S,M,L ',()=>{
      
         homePage.getProjectStatus().should(($el, index) => {
            const tablePadding = Cypress.$($el).css(sizeValue.checkForTablePadding)
            expect(tablePadding).to.eq(sizeValue.RemSize[index])
        });
   });       

})

