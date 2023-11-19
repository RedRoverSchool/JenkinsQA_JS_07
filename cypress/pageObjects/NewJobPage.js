import MultiConfigProjectConfigurePage from "../pageObjects/MultiConfigProjectConfigurePage";
import FreestyleProjectConfigurePage from "../pageObjects/FreestyleProjectConfigurePage";

class NewJobPage {
    getInputNameField = () => cy.get('input#name');
    getMultiConfigTypeOfProjectBtn = () => cy.get('li.hudson_matrix_MatrixProject');
    getOKButton = () => cy.get('#ok-button');
    getFreestyleTypeOfProjectBtn = () => cy.get('.hudson_model_FreeStyleProject');
    getTypeOfProjectLabels = () => cy.get(".label");
    getCopyField =() => cy.get('div.item-copy');
    getCopyFieldInput =() => cy.get('#from.jenkins-input.auto-complete');
    getCopyFieldOKButton =() => cy.get('.jenkins-button--primary');

    fillInputNameField(nameProject) {
        this.getInputNameField().should('be.visible').type(nameProject);

        return this;
    }

    clickMultiConfigTypeOfProjectBtn() {
        this.getMultiConfigTypeOfProjectBtn().click();

        return this;
    }

    clickOKButton() {
        this.getOKButton().сlick();

        return new MultiConfigProjectConfigurePage();
    }

    clickFreestyleTypeOfProjectBtn() {
        this.getFreestyleTypeOfProjectBtn().click();

        return this;
    }
    
    clickOKButtonFreestyle() {
        this.getOKButton().click();

        return new FreestyleProjectConfigurePage();
    }
    
    collectTypeOfProjectLabels(){
        this.getTypeOfProjectLabels().as("labelName");

        return this;
    }

    clickCopyField(){
        this.getCopyField().click()

        return this;
    }

    fillCopyFromField(name){
        this.getCopyFieldInput().type(name);

        return this;
    }

    clickCopyFieldOKButton() {
        this.getCopyFieldOKButton().click();

        return this;
    }
}
export default NewJobPage;