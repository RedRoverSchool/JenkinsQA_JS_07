class FreestyleProjectConfigurePage {
    getSourceCodeManagementSection = () => cy.get('#source-code-management');
    getSourceCodeManagementSectionBtns = () => cy.get('#source-code-management').parent().find('[id^=radio-block-]');
    getSourceCodeManagementSectionLbls = () => cy.get('#source-code-management').parent().find('label[for^=radio-block-]');
    getConfigurePageHeader = () => cy.get('h1');
    getBuildEnvironmet = () => cy.get('button[data-section-id="build-environment"]');

    clickSourceCodeManagementMenuItem() {
        this.getSourceCodeManagementSection().click();
        return this;
    }

    clickBuildEnvironment() {
        this.getBuildEnvironmet().click();
        return this;
    }
}
export default FreestyleProjectConfigurePage;