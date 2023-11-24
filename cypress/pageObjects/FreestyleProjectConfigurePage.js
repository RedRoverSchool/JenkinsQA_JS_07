class FreestyleProjectConfigurePage {
    getGeneralSection = () => cy.get('#general');
    getGeneralSectionToggleBtnEnabled = () => cy.get('.jenkins-toggle-switch__label__checked-title');
    getGeneralSectionToggleBtnDisabled = () => cy.get('.jenkins-toggle-switch__label__unchecked-title');
    getGeneralSectionToggleBtn = () => cy.get('#toggle-switch-enable-disable-project');
    getSourceCodeManagementSection = () => cy.get('#source-code-management');
    getSrcCodeMngmntNoneOption = () => cy.get('#radio-block-0');
    getSourceCodeManagementSectionBtns = () => cy.get('#source-code-management').parent().find('[id^=radio-block-]');
    getSourceCodeManagementSectionLbls = () => cy.get('#source-code-management').parent().find('label[for^=radio-block-]');

    clickGeneralSectionToggleBtn() {
        this.getGeneralSectionToggleBtn().click();
        return this;
    } 
    
    clickSourceCodeManagementMenuItem() {
        this.getSourceCodeManagementSection().click();
        return this;
    }
}
export default FreestyleProjectConfigurePage;