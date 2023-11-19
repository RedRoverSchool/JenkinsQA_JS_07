class RestApiPage {

    getBreadcrumbsApiLink = () => cy.get('.jenkins-breadcrumbs__list-item a[href="/api/"]');
    getApiHeaderText = () => cy.get('#page-body h1');
    getUrl = () => cy.url();


}
export default RestApiPage;