import NewJobPage from "../pageObjects/NewJobPage";
import BuildHistoryPage from "../pageObjects/BuildHistoryPage"

class HomePage {
    getNewItemLink = () => cy.get('a[href="newJob"]');
    getNewItem =() => cy.get("a[href='/view/all/newJob']")
    getDashboardBreadcrumbsLink = () => cy.get('li.jenkins-breadcrumbs__list-item a[href="/"]');
    getProjectNameLink = () => cy.get('td a[href*="job"].jenkins-table__link');
    getBuildHistoryLink = () => cy.get('td:last-child [tooltip]'); 
    

    
    clickNewItemLink() {
        this.getNewItemLink().click();

        return new NewJobPage();
    }
    clickNewItem(){
        this.getNewItem().click()

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

}
export default HomePage;