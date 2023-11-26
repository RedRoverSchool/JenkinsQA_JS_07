class ManageJenkinsPage {
    getSystemConfigHeader = () => cy.get('h2').contains('System Configuration')
}
export default ManageJenkinsPage;