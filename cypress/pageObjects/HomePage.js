import NewJobPage from "../pageObjects/NewJobPage";
import BuildHistoryPage from "../pageObjects/BuildHistoryPage";
import RestApiPage from "../pageObjects/RestApiPage";
import ManageJenkinsPage from "../pageObjects/ManageJenkinsPage";
import PeoplePage from "../pageObjects/PeoplePage";
import ParticipatePage from "../pageObjects/ParticipatePage";
import dbCommandPanelData from "../fixtures/pom_fixtures/dbCommandPanelData.json";
import PipelinePage from "./PipelinePage";
const dayjs = require("dayjs");

class HomePage {

  getNewItemLink = () => cy.get('a[href*="/newJob"]');
  getDashboardBreadcrumbsLink = () => cy.get('li.jenkins-breadcrumbs__list-item a[href="/"]');
  getProjectNameLink = () => cy.get('td a[href*="job"].jenkins-table__link');
  getBuildHistoryLink = () => cy.get("td:last-child [tooltip]");
  getRestApilink = () => cy.get(".rest-api");
  getManageJenkinsLink = () => cy.get('a[href="/manage"]');
  getPeopleLink = () => cy.get('a[href="/asynchPeople/"]');
  getNewItem = () => cy.get("a[href='/view/all/newJob']")
  getScheduleBuildBtn = () => cy.get("td:last-child [tooltip]");
  getCreateHistoryBuild = () => cy.get('a[href="/view/all/builds"]');
  getJenkinsVersionBtn = () => cy.get("button.jenkins-button--tertiary.jenkins_ver");
  getPopUpMenuJenkinsVersion = () => cy.get(".tippy-content");
  getWelcomedMessageHeader = () => cy.get(".empty-state-block h1");
  getNameProjectArrow = () => cy.get("td .jenkins-menu-dropdown-chevron");
  getDeleteBtn = () => cy.get('.jenkins-dropdown__item[href$="/doDelete"]');
  getProjectTable = () => cy.get("table#projectstatus");
  getJenkinsStartWorkTitle = () => cy.get(".empty-state-block p");
  getSideMenuPanel = () => cy.get("#side-panel #tasks a");
  getInvolvedLink = () => cy.get(".tippy-box .jenkins-dropdown__item:nth-of-type(2)");
  getButtonIconSizeSmall = () => cy.get('li a[tooltip="Small"]');
  getBuildStatusIcon = () => cy.get('td[data="12"].jenkins-table__icon');
  getProjectStatus = () => cy.get("#projectstatus");
  getDashboardLinkDropdown = () => cy.get("li > a > button.jenkins-menu-dropdown-chevron");
  getNewItemLinkFromBreadcrumbs = () => cy.get(".jenkins-dropdown__item:nth-child(1)");
  getContentBlockItem = () => cy.get(".empty-state-section:last-child ul li");
  getContentBlockItemIcon = () => cy.get(".empty-state-section:last-child ul li svg");
  getContentBlockItemPath = () => cy.get(".empty-state-section:last-child ul li path");
  getSizeButton = ()=> cy.get('.jenkins-icon-size__items.jenkins-buttons-row ol li');
  getBuildQueueBlock = () => cy.get("div#buildQueue");
  getBuildQueueBlockArrow = () => cy.get('[href="/toggleCollapse?paneId=buildQueue"]');
  getBuildQueueBlockContent = () => cy.get("div#buildQueue .pane-content");
  getBuildExecutorStatusBlock = () => cy.get('div#executors');

  clickProjectNameLink() {
    this.getProjectNameLink().click();

    return new PipelinePage();
  }

  clickNewItem() {
    this.getNewItem().click()
    return new NewJobPage;
  }

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

  clickScheduleBuildBtn() {
    this.getScheduleBuildBtn().click();

    return this;
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

  clickNameProjectArrow() {
    this.getNameProjectArrow().realHover().click();

    return this;
  }

  clickDeletePipelineBtn() {
    this.getDeleteBtn().click();

    return this;
  }

  clickWindowConfirm(windowConfirmText) {
    cy.on("window:confirm", (str) => {
      expect(str).to.eq(windowConfirmText);
    });
  }

  clickWindowConfirmCancel() {
    cy.on("window:confirm", () => {
      return false;
    });
  }

  clickWindowConfirmOK(windowConfirmText) {
    cy.on("window:confirm", (str) => {
      expect(str).to.eq(windowConfirmText);
    });
  }

  clickSideMenuPanelItem(idx) {
    this.getSideMenuPanel().eq(idx).click();

    return cy.url();
  }
  
  clickSizeButton(index){
    this.getSizeButton().eq(index).click()
    return this
  }

  getContainsText(idx) {
    cy.contains(dbCommandPanelData.pageHeader[idx]);
  }

  clickGetInvolvedLink() {
    this.getInvolvedLink().invoke("removeAttr", "target").click();

    return new ParticipatePage();
  }

  clickSideMenuItemList(itemName, index) {
    this.getSideMenuPanel().eq(index).as("item");
    cy.get("@item").contains(itemName);
    cy.get("@item").click();

    return cy.url();
  }

  clickButtonIconSizeSmall(){
    this.getButtonIconSizeSmall().click()
   
    return this;
  }

  clickNewItemDashboardLinkDropdown() {
    this.getDashboardLinkDropdown().click();
    this.getNewItemLinkFromBreadcrumbs().click();

    return new NewJobPage();
  }

clickBuildQueueBlockArrow() {
  this.getBuildQueueBlockArrow().click();

  return this;
}

takeBuildQueueBlockState() {
  
  return this.getBuildQueueBlockArrow().invoke("attr", "title")  
}
}
export default HomePage;
