import configureToolsTitle from "../fixtures/pom_fixtures/configureToolTitle.json"
class ConfigureToolsPage {
    
    getToolsTitle = () => cy.get('h1')

    viewToolsTitle() {
        this.getToolsTitle().should('have.text', configureToolsTitle)
        return this;
    }
}
export default ConfigureToolsPage