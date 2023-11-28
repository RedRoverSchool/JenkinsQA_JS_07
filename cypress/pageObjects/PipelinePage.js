import PipelineConfigurePage from "./PipelineConfigurePage";

class PipelinePage {

    getDisabledProgectWarning = () => cy.get('.warning');
    getConfigureBtn = () => cy.get('#side-panel .task').contains('Configure')
    getPipelineNameHeader = () => cy.get('.job-index-headline')
 
    clickConfigureBtn(){
        this.getConfigureBtn().click()

        return new PipelineConfigurePage ()
    }
}
export default PipelinePage