class PipelineConfigurePage {
    getEnabDisabSwitchToggle = () => cy.get('#toggle-switch-enable-disable-project');
    getLabelDisabled = () => cy.get('.jenkins-toggle-switch__label__unchecked-title');
    getLabelEnabled = () => cy.get('.jenkins-toggle-switch__label__checked-title')
    getDiscardOldBuildsHelpBtn = () => cy.get('a[helpurl="/descriptor/jenkins.model.BuildDiscarderProperty/help"]');
    getDiscardOldBuildsHelpText = () => cy.get('div[ref="cb2"]~.help-area>.help');      
    
    clickEnabDisabSwitchToggle(){
        this.getEnabDisabSwitchToggle().click();

        return this;
    }

    clickDiscardOldBuildsHelpBtn() {
        this.getDiscardOldBuildsHelpBtn().click();

        return this;    
    }       
}
export default  PipelineConfigurePage;