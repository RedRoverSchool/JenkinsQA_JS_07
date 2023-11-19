import HomePage from "../pageObjects/HomePage";

class PeoplePage {
    getJenkinsHomeLink = () => cy.get('#jenkins-home-link');

    clickJenkinsHomeLink() {
        this.getJenkinsHomeLink().click()

        return new HomePage();
    }
}
export default PeoplePage;