import McProjectNewJobPage from "./McProjectNewJobPage";

class McProjectHomePage {
    getNewItemlink = () => cy.get('a[href="newJob"]');
    getDashboardBreadcrumbsLink = () => cy.get('li.jenkins-breadcrumbs__list-item a[href="/"]');
    getProjectNameLink = () => cy.get('.jenkins-table__link');


    clickNewItemlink () {
        this.getNewItemlink().click();

        return new McProjectNewJobPage();
    }

    clickDashboardBreadcrumbsLink() {
        this.getDashboardBreadcrumbsLink().click();

        return this;
    }


}
export default McProjectHomePage;