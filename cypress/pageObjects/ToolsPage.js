
class ToolsPage {
    getToolsPageUrl = () => cy.url();
    getToolsTitle = () => cy.get('h1');
    }
export default ToolsPage