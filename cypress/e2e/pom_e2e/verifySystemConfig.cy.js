///<reference types = "cypress"/>
import HomePage from "../../pageObjects/HomePage"
import ManageJenkinsPage from "../../pageObjects/ManageJenkinsPage"
import HeaderName from "../../fixtures/manageJenkinsSystemConfTools.json"

describe ('Verify "System Configuration" section', function(){
    it ('TC_09.06.010 | Manage Jenkins > System Configuration > Tools > Verify "System Configuration" section is visible', function(){
       const homePage = new HomePage()
       const manageJenkinsPage = new ManageJenkinsPage()

       homePage.clickManageJenkinsLink()
       manageJenkinsPage.getSystemConfigHeader()
                        .should('be.visible')
                        .should('have.text', HeaderName.sectionMainHeader)
    })
})