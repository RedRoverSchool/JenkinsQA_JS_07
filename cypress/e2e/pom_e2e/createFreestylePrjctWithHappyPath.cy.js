///<reference types = "cypress"/>
import HomePage from "../../pageObjects/HomePage";
import NewJobPage from "../../pageObjects/NewJobPage";
import nameOfProject from "../../fixtures/pom_fixtures/multiconfigProjectData.json";

describe ('Create freestyle project', function(){
    const homepage = new HomePage();
    const newJobPage = new NewJobPage();
    it('TC_03.02.008 | New item > Create Freestyle Project > Create freestyle project with happy path', function(){
        homepage.clickNewItemLink()
                .fillInputNameField(nameOfProject.happyPathProjectName)
                .clickMultiConfigTypeOfProjectBtn()
                .clickOKButtonFreestyle();
        homepage.clickDashboardBreadcrumbsLink()
                .getProjectNameLink()
                .should('have.text', nameOfProject.happyPathProjectName)     
    })
})