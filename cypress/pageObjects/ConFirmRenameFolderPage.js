import FolderPage from "./FolderPage";
import HomePage from "./HomePage";

class ConfirmRenameFolderPage {
    getBtnConfirmRenameFolder = () => cy.get('button[name="Submit"]');
    getNewNameField = () => cy.get('input[checkdependson="newName"]');
  
    fillNewNameField(newName) {
      this.getNewNameField().clear().type(newName);
      return this;
    }
    clickBtnConfirmRenameFolder() {
      this.getBtnConfirmRenameFolder().click();
      return new HomePage();
    }

    clickRenameBtn(){
      this.getBtnConfirmRenameFolder().click();

      return new FolderPage();
    }
  }
  export default ConfirmRenameFolderPage;