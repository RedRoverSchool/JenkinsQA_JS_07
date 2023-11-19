import FolderConfigurePage from "./FolderConfigurePage";

class FolderPage {
  getConfigureLink = () => cy.get("a[href*='configure']");

  clickConfigureLink() {
    this.getConfigureLink().click();

    return new FolderConfigurePage();
  }
}

export default FolderPage;
