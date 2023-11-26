import MultiConfigProjectConfigurePage from "../pageObjects/MultiConfigProjectConfigurePage";
import FreestyleProjectConfigurePage from "../pageObjects/FreestyleProjectConfigurePage"
class NewJobPage {
    getTitlePage = () => cy.get('.h3');
    getErrorMessage = () => cy.get('#itemname-required');
    getTypeOfProject = () => cy.get('.label');
    getTypeProject = () =>cy.get('ul[class="j-item-options"]>li');

    getInputNameField = () => cy.get('input#name');
    getMultiConfigTypeOfProjectBtn = () => cy.get('li.hudson_matrix_MatrixProject');
    getOKButton = () => cy.get('#ok-button');
    getFreestyleTypeOfProjectBtn = () => cy.get('.hudson_model_FreeStyleProject');

    verifyTitleText(title)
    {
      this.getTitlePage().should('be.visible').and('have.text',title)
      return this
    }

    verifyTextField()
    {
      this.getInputNameField().should('be.visible')
      return this
    }

    verifyTextFieldEmpty()
    {
        this.getTitlePage().click()
        this.getErrorMessage().should('be.visible')
        return this
    }

    typeTextField()
    {
        this.getInputNameField().type('cdcdc')
        return this
    }

    verifyErrorMessage(message)
    {
        this.getTypeProject().each(($el,i) => {
            cy.wrap($el).click()
            this.getErrorMessage().should('have.text',message)
        })
      return this
    }

    verifyListOfTypeProgect(list)
    {
        this.getTypeOfProject().each(($el, i) => {
            cy.wrap($el).should('have.text', list[i]).and('be.visible')
        })
    }

notSelectTypesInactiveButton()
{
    this.getTypeProject().each(($el,i) => {
        cy.wrap($el)
        this.getTypeProject().eq(i).invoke('attr','aria-checked').should('eql','false')
        this.getOKButton().should('be.disabled')
    })
    return this
}

    selectTypesActiveButton()
    {
        this.getTypeProject().each(($el,i) => {
            cy.wrap($el).click()
            this.getTypeProject().eq(i).invoke('attr','aria-checked').should('eql','true')
            this.getOKButton().should('be.enabled')
        })
        return this
    }

selectTypesInactiveButton()
{
    this.getTypeProject().each(($el,i) => {
        cy.wrap($el).click()
        this.getTypeProject().eq(i).invoke('attr','aria-checked').should('eql','true')
        this.getOKButton().should('be.disabled')
    })
    return this
}

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

    clickFreestyleTypeOfProjectBtn() {
        this.getFreestyleTypeOfProjectBtn().click();

        return this;
    }
    
    clickOKButtonFreestyle() {
        this.getOKButton().click();

        return new FreestyleProjectConfigurePage();
    }
 
}
export default NewJobPage;