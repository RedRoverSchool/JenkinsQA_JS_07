import HomePage from "../../pageObjects/HomePage";
import newProject from "../../fixtures/pom_fixtures/newProject.json"
import ErrorMessagePage from "../../pageObjects/CreateItemErrorPage";


describe('Verify "Copy from" field', () => {
    const homePage = new HomePage();
    const errorMessagePage = new ErrorMessagePage
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
                .clickCopyFieldOKButton()
        errorMessagePage.getMessage()
    })
})
