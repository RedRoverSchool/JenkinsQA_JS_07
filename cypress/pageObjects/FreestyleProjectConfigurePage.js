class FreestyleProjectConfigurePage {
    getSourceCodeManagementSection = () => cy.get('#source-code-management');

    clickSourceCodeManagementMenuItem() {
        this.getSourceCodeManagementSection().click();
        return this;
    }
}
export default FreestyleProjectConfigurePage;