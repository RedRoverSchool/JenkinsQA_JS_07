class FreestyleProjectPage {
    getFreestyleNameHeader = () => cy.get('.job-index-headline');
    getFreestyleProjectPageUrl = () => cy.url();

}
export default FreestyleProjectPage;