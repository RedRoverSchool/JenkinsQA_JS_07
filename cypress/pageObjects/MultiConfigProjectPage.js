class MultiConfigProjectPage {
    getCreatedDescription = () => cy.get("#description>div:first-child");
    getWarningDisabledProjectMessage = () => cy.get("form#enable-project");
    getEnableProjectButton = () => cy.get("button.jenkins-button--primary");
}
export default MultiConfigProjectPage;