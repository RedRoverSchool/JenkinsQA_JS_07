import MultiConfigProjectConfigurePage  from "../pageObjects/MultiConfigProjectConfigurePage"

class JobPage1 {
    getInputNameField = () => cy.get('input#name');
    getMultiConfigTypeofProjectBtn = () => cy.get('li.hudson_matrix_MatrixProject');    
    getOKButton = () => cy.get('#ok-button');

    fillInputNameField(nameProject) {
        this.getInputNameField().type(nameProject)

    return this;
    }
    clickMultiConfigTypeOfProjectBtn() {
        this.getMultiConfigTypeofProjectBtn().click();

        return this;
}
 clickOKButton() {
    this.getOKButton().click();

    return new MultiConfigProjectConfigurePage();

}

}
export default JobPage1;