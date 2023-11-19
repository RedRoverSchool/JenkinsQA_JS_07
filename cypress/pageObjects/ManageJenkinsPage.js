class ManageJenkinsPage {
    getHeaderManageJenkins =() => cy.get('.jenkins-app-bar h1')
    getManageJenkinsURL = () => cy.url()
}

export default ManageJenkinsPage