import McProjectConfigProjectPage from "./McProjectConfigProjectPage";

class McProjectNewJobPage {
    getInputNameField = () => cy.get('.jenkins-input');
    getMulticonfigTypeOfProjectRBtn = () => cy.get('li.hudson_matrix_MatrixProject');
    getOkBtn = () => cy.get('#ok-button');


    fillInputNameField (projectName) {
        this.getInputNameField().type(projectName);

        return this;
    };

    clickMulticonfigTypeOfProjectRBtn () {
        this.getMulticonfigTypeOfProjectRBtn().click();

        return this;
    };

    clickOkBtn () {
        this.getOkBtn().click();

        return new McProjectConfigProjectPage;
    };
}
export default McProjectNewJobPage;