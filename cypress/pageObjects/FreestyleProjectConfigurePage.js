class FreestyleProjectConfigurePage {
    getGeneralSection = () => cy.get('#general');
    getGeneralSectionToggleBtnEnabled = () => cy.get('.jenkins-toggle-switch__label__checked-title');
    getGeneralSectionToggleBtnDisabled = () => cy.get('.jenkins-toggle-switch__label__unchecked-title');
    getGeneralSectionToggleBtn = () => cy.get('#toggle-switch-enable-disable-project');
    getSourceCodeManagementSection = () => cy.get('#source-code-management');
    getSrcCodeMngmntNoneOption = () => cy.get('#radio-block-0');
    getSourceCodeManagementSectionBtns = () => cy.get('#source-code-management').parent().find('[id^=radio-block-]');
    getSourceCodeManagementSectionLbls = () => cy.get('#source-code-management').parent().find('label[for^=radio-block-]');
    getConfigurePageHeader = () => cy.get('h1');
    getBuildEnvironmet = () => cy.get('button[data-section-id="build-environment"]');

    clickSourceCodeManagementMenuItem() {
        this.getSourceCodeManagementSection().click();
        return this;
    };

    clickGitOptionTooltip() {
        this.getGitOptionTooltip().click();
        return this;
    }

    clickBuildEnvironment() {
        this.getBuildEnvironmet().click();
        return this;
    }
}
export default FreestyleProjectConfigurePage;