
class ToolsPage {
    getToolsPageUrl = () => cy.url();
    getToolsTitle = () => cy.get('h1');

    checkToolsPageUrl(){
        this.getToolsPageUrl()
            .should('contain', '/manage/configureTools/')
    }

    checkToolsTitle() {
        this.getToolsTitle()
            .should('have.text', 'Tools')
        return this;
    }
}
export default ToolsPage