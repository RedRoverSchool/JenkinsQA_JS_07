
class BuildHistoryPage {
    getCreateBuld = () => cy.get('td:last-child [tooltip]');
    getCreateHistoryBuild = () => cy.get('a[href="/view/all/builds"]');
    getWindowBuildHistory = () => cy.get('#icon-tl-0-1-e1')
    getTitleBuild = () => cy.get('div.timeline-event-bubble-title a')
  

    clickCreateBuld() {
        this.getCreateBuld().click();

        return this;
    }

    clickCreateHistoryBuild() {
        this.getCreateHistoryBuild().click();

        return this;
    }

    clickWindowBuildHistory() {
        this.getWindowBuildHistory().click();

        return this;
    }
}
export default BuildHistoryPage;