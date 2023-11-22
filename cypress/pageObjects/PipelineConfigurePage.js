class PipelineConfigurePage {
    getDiscardOldBuildsHelpBtn = () => cy.get('a[helpurl="/descriptor/jenkins.model.BuildDiscarderProperty/help"]');
    getDiscardOldBuildsHelpText = () => cy.get('div[ref="cb2"]~.help-area>.help');      

    clickDiscardOldBuildsHelpBtn() {
        this.getDiscardOldBuildsHelpBtn().click();

        return this;    
    }       

}
export default PipelineConfigurePage;