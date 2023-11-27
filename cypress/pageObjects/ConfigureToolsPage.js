class ConfigureToolsPage {
    getConfigureToolsMainHeader = () => cy.get(".jenkins-app-bar__content h1");
    getConfigureToolsURL = () => cy.url();

    createConfigureURL(baseUrl, url, rout) {
        return `${baseUrl}${url}${rout}/`;
    }
}
export default ConfigureToolsPage;