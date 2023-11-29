class FreestyleProjectConfigurePage {
    getGeneralSection = () => cy.get('#general');
    getGeneralSectionToggleBtnEnabled = () => cy.get('.jenkins-toggle-switch__label__checked-title');
    getGeneralSectionToggleBtnDisabled = () => cy.get('.jenkins-toggle-switch__label__unchecked-title');
    getGeneralSectionToggleBtn = () => cy.get('#toggle-switch-enable-disable-project');
    getSourceCodeManagementSection = () => cy.get('#source-code-management');
    getSrcCodeMngmntNoneOption = () => cy.get('#radio-block-0');
    getSourceCodeManagementSectionBtns = () => cy.get('#source-code-management').parent().find('[id^=radio-block-]');
    getSourceCodeManagementSectionLbls = () => cy.get('#source-code-management').parent().find('label[for^=radio-block-]');
    getGitOptionTooltip = () => cy.get('a[tooltip="Help for feature: Git"]');
    getOptionTooltipContent = () => cy.get('div.tippy-box');
    getBuildEnvironmentSectionMenuItem = () => cy.get('button[data-section-id="build-environment"]');
    getBuildEnvironmentSection = () => cy.get('#build-environment');
    getBuildEnvironmentSectionOptions = () => cy.get(' #build-environment~.optionalBlock-container');
    getUseSecretTextOptionTooltip = () => cy.get('a[helpurl="/descriptor/org.jenkinsci.plugins.credentialsbinding.impl.SecretBuildWrapper/help"]');
        
    clickGeneralSectionToggleBtn() {
        this.getGeneralSectionToggleBtn().click();
        return this;
    } 
    
    clickSourceCodeManagementMenuItem() {
        this.getSourceCodeManagementSection().click();
        return this;
    };

    clickBuildEnvironmentSectionMenuItem() {
        this.getBuildEnvironmentSectionMenuItem().click();
        return this;
    };

    hoverUseSecretTextOptionTooltip() {
        this.getUseSecretTextOptionTooltip().realHover();    
        return this;
      }
}
export default FreestyleProjectConfigurePage;