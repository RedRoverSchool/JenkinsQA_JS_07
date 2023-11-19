import newProject from "../fixtures/pom_fixtures/newProject.json"
class CreateItemErrorPage{
 getMessage = ()=> cy.get('h1')
                     .should('have.text', newProject.message)
 }

export default CreateItemErrorPage