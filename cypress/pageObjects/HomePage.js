import NewJobPage from '../pageObjects/NewJobPage';
import BuildHistoryPage from '../pageObjects/BuildHistoryPage';
import RestApiPage from '../pageObjects/RestApiPage';
import ManageJenkinsPage from '../pageObjects/ManageJenkinsPage';
import PeoplePage from '../pageObjects/PeoplePage';

class HomePage {
  getNewItemLink = () => cy.get('a[href="newJob"]');
  getDashboardBreadcrumbsLink = () =>
    cy.get('li.jenkins-breadcrumbs__list-item a[href="/"]');
  getProjectNameLink = () => cy.get('td a[href*="job"].jenkins-table__link');
  getBuildHistoryLink = () => cy.get('td:last-child [tooltip]');
  getRestApilink = () => cy.get('.rest-api');
  getManageJenkinsLink = () => cy.get('a[href="/manage"]');
  getPeopleLink = () => cy.get('a[href="/asynchPeople/"]');

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

  clickRestApilink() {
    this.getRestApilink().click();

    return new RestApiPage();
  }

  clickManageJenkinsLink() {
    this.getManageJenkinsLink().click();

    return new ManageJenkinsPage();
  }

  clickPeopleLink() {
    this.getPeopleLink().click();

    return new PeoplePage();
  }
}
export default HomePage;
