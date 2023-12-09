import ProjectName from "../fixtures/pom_fixtures/multiconfigProjectData.json"
class PipelineConfigurePage {
    getEnabDisabSwitchToggle = () => cy.get('#toggle-switch-enable-disable-project');
    getLabelDisabled = () => cy.get('.jenkins-toggle-switch__label__unchecked-title');
    getLabelEnabled = () => cy.get('.jenkins-toggle-switch__label__checked-title')
    getSaveBtn = () => cy.get('.jenkins-button--primary');
    getDiscardOldBuildsHelpBtn = () => cy.get('a[helpurl="/descriptor/jenkins.model.BuildDiscarderProperty/help"]');
    getDiscardOldBuildsHelpText = () => cy.get('div[ref="cb2"]~.help-area>.help');
    getAdvancedProjectOptionsBtn = () => cy.get(':nth-child(8) > :nth-child(2) > .advancedLink > .jenkins-button')
    getDisplayNameField = () => cy.get('input[name="_.displayNameOrNull"]') 
    getTooltipDiscardOldBuildsHelp = ()=> cy.get('div[id="tippy-8"]')
    getDecriptionField = () => cy.get('textarea[name="description"]')    

    fillDescriptionField(Description){
        this.getDecriptionField().should('be.visible').type(Description)

        return this;
    }

    clickEnabDisabSwitchToggle(){
        this.getEnabDisabSwitchToggle().click();

        return this;
    }

    clickSaveBtn(){
        this.getSaveBtn().wait(1000).click();

        return this;
    }

    clickDiscardOldBuildsHelpBtn() {
        this.getDiscardOldBuildsHelpBtn().click();

        return this;    
    }

    realHoverDiscardOldBuildsHelpBtn() {
        this.getDiscardOldBuildsHelpBtn().trigger('focus');

        return this;    
    }
    
    clickAdvancedProjectOptionsBtn () {
        this.getAdvancedProjectOptionsBtn().click()
        
        return this;
    }

    typeInDisplayNameField(displayName) {
        this.getDisplayNameField().should('be.visible').type(displayName)

        return this;
    }  
}
export default  PipelineConfigurePage