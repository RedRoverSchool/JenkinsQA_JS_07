class FreestyleProjectConfigurePage {
    getSourceCodeManagementSection = () => cy.get('#source-code-management');
    getSourceCodeManagementSectionBtns = () => cy.get('#source-code-management').parent().find('[id^=radio-block-]');
    getSourceCodeManagementSectionLbls = () => cy.get('#source-code-management').parent().find('label[for^=radio-block-]');

    clickSourceCodeManagementMenuItem() {
        this.getSourceCodeManagementSection().click();
        return this;
    }
}
export default FreestyleProjectConfigurePage;