import NewJobPage from "../pageObjects/NewJobPage";
import BuildHistoryPage from "../pageObjects/BuildHistoryPage"
import PeoplePage from "../pageObjects/PeoplePage";

class HomePage {
    getNewItemLink = () => cy.get('a[href="newJob"]');
    getDashboardBreadcrumbsLink = () => cy.get('li.jenkins-breadcrumbs__list-item a[href="/"]');
    getProjectNameLink = () => cy.get('td a[href*="job"].jenkins-table__link');
    getBuildHistoryLink = () => cy.get('td:last-child [tooltip]'); 
    getJenkinsLogo = () => cy.get('#jenkins-head-icon');
    getJenkinsTitle = () =>  cy.get('#jenkins-name-icon');
    getPeopleLink = () => cy.get('a[href="/asynchPeople/"]');
    getWellcomeTitle = () => cy.get('h1')


    
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

    clickPeopleLink() {
        this.getPeopleLink().click()

        return new PeoplePage();
    }

}
export default HomePage;