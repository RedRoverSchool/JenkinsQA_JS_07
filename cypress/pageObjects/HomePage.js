import NewJobPage from '../pageObjects/NewJobPage';
import BuildHistoryPage from '../pageObjects/BuildHistoryPage';
import ManageJenkinsPage from '../pageObjects/ManageJenkinsPage';

class HomePage {
  getNewItemLink = () => cy.get('a[href="newJob"]');
  getDashboardBreadcrumbsLink = () =>
    cy.get('li.jenkins-breadcrumbs__list-item a[href="/"]');
  getProjectNameLink = () => cy.get('td a[href*="job"].jenkins-table__link');
  getBuildHistoryLink = () => cy.get('td:last-child [tooltip]');
  getManageJenkinsLink = () => cy.get('a[href="/manage"]');

  clickNewItemLink() {
    this.getNewItemLink().click();

    return new NewJobPage();
  }

  clickDashboardBreadcrumbsLink() {
    this.getDashboardBreadcrumbsLink().click();

    return this;
  }

  clickBuildHistoryLink() {
    this.getBuildHistoryLink().click();

    return new BuildHistoryPage();
  }

  clickManageJenkinsLink() {
    this.getManageJenkinsLink().click();

    return new ManageJenkinsPage();
  }
}
export default HomePage;
