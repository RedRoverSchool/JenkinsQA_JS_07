class MultiConfigProjectConfigurePage {
    getConfigSection = () => cy.get('.jenkins-app-bar__content > h1');
    getSideTasksMenu = () => cy.get('div#tasks .task');
    getSidePanel = () => cy.get('#side-panel');
}
export default MultiConfigProjectConfigurePage;