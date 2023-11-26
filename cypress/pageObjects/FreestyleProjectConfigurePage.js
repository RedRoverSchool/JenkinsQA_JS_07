class FreestyleProjectConfigurePage {
    getSourceCodeManagementSection = () => cy.get('#source-code-management');
    getSrcCodeMngmntNoneOption = () => cy.get('#radio-block-0');
    getSourceCodeManagementSectionBtns = () => cy.get('#source-code-management').parent().find('[id^=radio-block-]');
    getSourceCodeManagementSectionLbls = () => cy.get('#source-code-management').parent().find('label[for^=radio-block-]');
    getGitOptionTooltip = () => cy.get('a[tooltip="Help for feature: Git"]');
    getGitOptionTooltipContent = () => cy.get('div.tippy-box');
    getBuildEnvironmentSection = () => cy.get('#build-environment');
    getBuildEnvironmentSectionOptions = () => cy.get(' #build-environment~.optionalBlock-container');

    clickSourceCodeManagementMenuItem() {
        this.getSourceCodeManagementSection().click();
        return this;
    };

    clickBuildEnvironmentSectionMenuItem() {
        this.getBuildEnvironmentSection().click();
        return this;
    };
}
export default FreestyleProjectConfigurePage;