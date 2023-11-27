import HomePage from "../pageObjects/HomePage";
import footerJenkinsData from "../fixtures/footerJenkinsData.json"

class ParticipatePage {
    getParticipatePageUrl = () => cy.url();
    getParticipatePageHeader = () => cy.get("h1");

    checkParticipatePageUrl() {
        this.getParticipatePageUrl().should(
            "be.equal",
            footerJenkinsData.participatePage
        );

        return this;
    }
}

export default ParticipatePage;
