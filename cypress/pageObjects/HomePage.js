import NewJobPage from '../pageObjects/NewJobPage';
import BuildHistoryPage from '../pageObjects/BuildHistoryPage';
import RestApiPage from '../pageObjects/RestApiPage';
import ManageJenkinsPage from '../pageObjects/ManageJenkinsPage';
import PeoplePage from '../pageObjects/PeoplePage';
const dayjs = require('dayjs');
class HomePage {
    getNewItemLink = () => cy.get('a[href="newJob"]');
    getDashboardBreadcrumbsLink = () => cy.get('li.jenkins-breadcrumbs__list-item a[href="/"]');
    getProjectNameLink = () => cy.get('td a[href*="job"].jenkins-table__link');
    getBuildHistoryLink = () => cy.get('td:last-child [tooltip]'); 
    getRestApilink = () => cy.get('.rest-api');
    getManageJenkinsLink = () => cy.get('a[href="/manage"]');
    getPeopleLink = () => cy.get('a[href="/asynchPeople/"]');
    getScheduleBuildBtn = () => cy.get('td:last-child [tooltip]')
    getCreateHistoryBuild = () => cy.get('a[href="/view/all/builds"]') 
    getJenkinsVersionBtn = () => cy.get('button.jenkins-button--tertiary.jenkins_ver');
    getPopUpMenuJenkinsVersion = () => cy.get('.tippy-content');

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

  clickScheduleBuildBtn(){
    this.getScheduleBuildBtn().click()
    return this 
  } 
 
  expData1() {
    let expData1;
    return (expData1 = dayjs().format("ddd, DD MMM YYYY HH:mm"));
  }

  clickCreateHistoryBuild() {
    this.getCreateHistoryBuild().click();

    return new BuildHistoryPage();
  }

  clickJenkinsVersionBtn() {
    this.getJenkinsVersionBtn().click();

    return this;
  }
}
export default HomePage;
