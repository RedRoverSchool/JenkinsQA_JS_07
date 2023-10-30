describe('System Configuration Test', () => {

    it('US_09.06 | Manage Jenkins > System Configuration > Tools', () => {
        cy.get('a[href="/manage"]').click()
        
        cy.contains('System Configuration').should('be.visible')

        cy.contains('System Configuration').next().contains('Tools').should('be.visible')

        cy.get('a[href="configureTools"] div.jenkins-section__item__icon svg.icon').should('be.visible')

        cy.contains('System Configuration').next().contains('Tools').click()
        
        cy.url().should('eq', 'http://localhost:8080/manage/configureTools/')
    })
})
