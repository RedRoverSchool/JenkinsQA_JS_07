import HomePage from "../../pageObjects/HomePage";
import newProject from "../../fixtures/pom_fixtures/newProject.json"
import CreateItemErrorPage from "../../pageObjects/CreateItemErrorPage";


describe('Verify "Copy from" field', () => {
    const homePage = new HomePage();
    const createItemErrorPage = new CreateItemErrorPage
    beforeEach('Create new job', () => {
    homePage.clickNewItemLink()
             .fillInputNameField(newProject.jobName)
             .clickFreestyleTypeOfProjectBtn()
             .clickOKButtonFreestyle()

    homePage.clickDashboardBreadcrumbsLink()
})
    it("TC__03.08.09 | New Item > Verify 'Copy from' field >can't create a new item from none existing item", () => {
        homePage.clickNewItem()
                .fillInputNameField(newProject.rendomJob)
                .clickCopyField()
                .fillCopyFromField(newProject.type)
                .clickOKButton()
        createItemErrorPage.getMessage()
                           .should('have.text', newProject.message)
    })
})
