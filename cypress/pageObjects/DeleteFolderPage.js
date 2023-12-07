import HomePage from "./HomePage";
import FolderPage from "./FolderPage";

class DeleteFolderPage {
    getSubmitDeleteBtn = () => cy.get('button[name="Submit"]');

    clickSubmitDeleteBtn() {
        this.getSubmitDeleteBtn().click()
        return new HomePage();
    }
}

export default DeleteFolderPage;