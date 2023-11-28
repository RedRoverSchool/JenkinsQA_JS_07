class ConfigureToolsPage {
    getConfigureToolsMainHeader = () => cy.get(".jenkins-app-bar__content h1");
    getConfigureToolsURL = () => cy.url();

    createConfigureToolsURL(baseUrl, manageJenkinsPageEndpoint, configureToolsPageEndpoint) {
        return `${baseUrl}${manageJenkinsPageEndpoint}${configureToolsPageEndpoint}/`;
    }
}
export default ConfigureToolsPage;