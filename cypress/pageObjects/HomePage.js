import NewJobPage from "../pageObjects/NewJobPage";
import BuildHistoryPage from "../pageObjects/BuildHistoryPage"
import RestApiPage from "../pageObjects/RestApiPage"

class HomePage {
    getNewItemLink = () => cy.get('a[href="newJob"]');
    getDashboardBreadcrumbsLink = () => cy.get('li.jenkins-breadcrumbs__list-item a[href="/"]');
    getProjectNameLink = () => cy.get('td a[href*="job"].jenkins-table__link');
    getBuildHistoryLink = () => cy.get('td:last-child [tooltip]'); 
    getRestApilink = () =>cy.get('.rest-api');


    
    clickNewItemLink() {
        this.getNewItemLink().click();

        return new NewJobPage();
    }

    clickDashboardBreadcrumbsLink() {
        this.getDashboardBreadcrumbsLink().click();

        return this;
    }

    clickBuildHistoryLink() {
        this.getBuildHistoryLink().click()

        return new BuildHistoryPage();
    }


    clickgetRestApilink(){
        this.getRestApilink().click();

        return new RestApiPage();
    }

}
export default HomePage;