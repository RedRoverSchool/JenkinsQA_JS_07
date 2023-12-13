
class JenkinsWebsitePage {
  getJenkinsWebsiteHeader = () => cy.get("h1.page-title span");
  getJenkinsWebsiteUrl = () => cy.url();
}

export default JenkinsWebsitePage;
