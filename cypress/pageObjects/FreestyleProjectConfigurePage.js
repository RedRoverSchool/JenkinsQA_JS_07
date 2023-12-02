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
    getGitOptionTooltipHelpArea = () => cy.get('[ref="radio-block-1"] + div.help-area > div.help');
    getBuildEnvironmentSectionMenuItem = () => cy.get('button[data-section-id="build-environment"]');
    getBuildEnvironmentSection = () => cy.get('#build-environment');
    getBuildEnvironmentSectionOptions = () => cy.get(' #build-environment~.optionalBlock-container');
    getUseSecretTextOptionTooltip = () => cy.get('a[helpurl="/descriptor/org.jenkinsci.plugins.credentialsbinding.impl.SecretBuildWrapper/help"]');
    getListOfBuildTriggerOptions = () => cy.get("#build-triggers").parent().find('.optionalBlock-container');
    getOneItemOfListBuildTriggerOption = (item) => item.find('.optional-block-start label.attach-previous');
    getOneHintIconFromBuildTriggerList = (item) => item.find(".jenkins-checkbox-help-wrapper a ");
    getHintIconTip = () => cy.get('div[id*="tippy"]');
    getMainPannel = () => cy.get('#main-panel')
    getDescriptionField = () => cy.get('textarea[name="description"]')
    
    clickGeneralSectionToggleBtn() {
        this.getGeneralSectionToggleBtn().click();
        return this;
    } 
    
    clickSourceCodeManagementMenuItem() {
        this.getSourceCodeManagementSection().click();
        return this;
    };

    clickGitOptionTooltip() {
        this.getGitOptionTooltip().click();
        return this;
    }

    clickBuildEnvironmentSectionMenuItem() {
        this.getBuildEnvironmentSectionMenuItem().click();
        return this;
    };

    hoverUseSecretTextOptionTooltip() {
        this.getUseSecretTextOptionTooltip().realHover();    
        return this;
      }
    
    hoverOneOfHintIconFromBuildTriggersList(item) {
        this.getOneHintIconFromBuildTriggerList(item).realHover();
        return this; 
    }
  
}
export default FreestyleProjectConfigurePage;