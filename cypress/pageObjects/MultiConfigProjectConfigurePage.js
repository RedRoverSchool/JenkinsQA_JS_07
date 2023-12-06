import MultiConfigProjectPage from "./MultiConfigProjectPage";

class MultiConfigProjectConfigurePage {
    getConfigSection = () => cy.get('.jenkins-app-bar__content > h1');
    getSideTasksMenu = () => cy.get('div#tasks .task');
    getSidePanel = () => cy.get('#side-panel');
    getDescriptionTextArea = () => cy.get("textarea[name='description']");
    getSaveButton = () => cy.get("button[name='Submit']");
    getEnabledProjectLabel = () => cy.get("span.jenkins-toggle-switch__label__checked-title");
    getDisabledProjectLabel = () => cy.get("span.jenkins-toggle-switch__label__unchecked-title");
    getToggleSwitchButton = () => cy.get("label.jenkins-toggle-switch__label");

    typeValueToTheDescrioinTextArea(value) {
        this.getDescriptionTextArea().type(value);

        return this;
    }

    disableMultiConfigProject(enabledProject, disabledProject) {
        this.getEnabledProjectLabel().should("have.text", enabledProject);
        this.getToggleSwitchButton().click();
        this.getDisabledProjectLabel().should("have.text", disabledProject);

        return this;
    }

    clickSaveButton() {
        this.getSaveButton().click();

        return new MultiConfigProjectPage();
    }
}
export default MultiConfigProjectConfigurePage;