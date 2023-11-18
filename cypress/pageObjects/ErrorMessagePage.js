import newProject from "../fixtures/pom_fixtures/newProject.json"
class ErrorMessagePage{
 getMessage = ()=> cy.get('h1')
                     .should('have.text', newProject.message)
 }

export default ErrorMessagePage