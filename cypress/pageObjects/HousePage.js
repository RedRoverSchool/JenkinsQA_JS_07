import JobPage1 from "../pageObjects/JobPage1";
class HousePage {
    getNewItemLink = () => cy.get('a[href="newJob"]');
    getDashboardBreadcrumbsLink = () => cy.get('li.jenkins-breadcrumbs__list-item a[href="/"]')
    getProjectNameLink = () => cy.get('td a[href*="job"].jenkins-table__link');
    
    clickNewItemLink() {
        this.getNewItemLink().click();
        
        return new JobPage1();
    }

    clickDashboardBreadcrumbsLink() {
        this.getDashboardBreadcrumbsLink().click()
        
        return this;

    }
}
export default HousePage;