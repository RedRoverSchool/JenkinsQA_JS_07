class ConfigureToolsPage {
    getConfigureToolsMainHeader = () => cy.get(".jenkins-app-bar__content h1");
    getConfigureToolsURL = () => cy.url();

    createConfigureURL(baseUrl, manageJenkinsPageEndpoint, manageJenkinsPageEndpoint) {
        return `${baseUrl}${manageJenkinsPageEndpoint}${configureToolsEndpoint}/`;
    }
}
export default ConfigureToolsPage;