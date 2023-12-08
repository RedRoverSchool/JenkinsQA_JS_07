import HomePage from "../pageObjects/HomePage";

class PeoplePage {
    getJenkinsHomeLink = () => cy.get('#jenkins-home-link');
    getJenkinsLogo = () => cy.get('#jenkins-head-icon')

    clickJenkinsHomeLink() {
        this.getJenkinsHomeLink().click()

        return new HomePage();
    }

    clickJenkinsLogo() {
        this.getJenkinsLogo().should('be.visible').click()

        return new HomePage()
    }

}
export default PeoplePage;