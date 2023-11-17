import MultiConfigProjectConfigurePage from "../pageObjects/MultiConfigProjectConfigurePage";

class NewJobPage {
    getInputNameField = () => cy.get('input#name');
    getMultiConfigTypeOfProjectBtn = () => cy.get('li.hudson_matrix_MatrixProject');
    getOKButton = () => cy.get('#ok-button');


    fillInputNameField(nameProject) {
        this.getInputNameField().should('be.visible').type(nameProject);

        return this;
    }

    clickMultiConfigTypeOfProjectBtn() {
        this.getMultiConfigTypeOfProjectBtn().click();

        return this;
    }

    clickOKButton() {
        this.getOKButton().click();

        return new MultiConfigProjectConfigurePage();
    }

}
export default NewJobPage;