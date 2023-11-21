class PipelineConfigurePage {
    getEnabDisabSwitchToggle = () => cy.get('#toggle-switch-enable-disable-project');
    getLabelDisabled = () => cy.get('.jenkins-toggle-switch__label__unchecked-title');
    getLabelEnabled = () => cy.get('.jenkins-toggle-switch__label__checked-title')

    clickEnabDisabSwitchToggle(){
        this.getEnabDisabSwitchToggle().click();

        return this;
    }

}
export default  PipelineConfigurePage