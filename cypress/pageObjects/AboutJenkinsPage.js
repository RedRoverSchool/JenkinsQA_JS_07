
class AboutJenkinsPage {
getAboutLenkinsHeader = () => cy.get("h1[class='app-about-heading']");
getAboutJenkinsUrl = () => cy.url();
}
export default AboutJenkinsPage