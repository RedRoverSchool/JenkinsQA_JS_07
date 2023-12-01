class MultiConfigProjectConfigurePage {
    getConfigSection = () => cy.get('.jenkins-app-bar__content > h1');
    getSideTasksMenu = () => cy.get('div#tasks .task');
    getSidePanel = () => cy.get('#side-panel');
    getDescriptionTextArea = () => cy.get("textarea[name='description']");
    getSaveButton = () => cy.get("button[name='Submit']");
    getCreatedDescription = () => cy.get("#description>div:first-child");

    typeValueToTheDescrioinTextArea(value) {
        this.getDescriptionTextArea().type(value);

        return this;
    }

    clickSaveButton() {
        this.getSaveButton().click();

        return this;
    }
}
export default MultiConfigProjectConfigurePage;