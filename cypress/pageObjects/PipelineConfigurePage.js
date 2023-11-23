class PipelineConfigurePage {
    getEnabDisabSwitchToggle = () => cy.get('#toggle-switch-enable-disable-project');
    getLabelDisabled = () => cy.get('.jenkins-toggle-switch__label__unchecked-title');
    getLabelEnabled = () => cy.get('.jenkins-toggle-switch__label__checked-title');
    getSaveBtn = () => cy.get('.jenkins-button--primary')

    clickEnabDisabSwitchToggle(){
        this.getEnabDisabSwitchToggle().click();

        return this;
    }

    clickSaveBtn(){
        this.getSaveBtn().click();

        return this;
    }
    
}
export default  PipelineConfigurePage