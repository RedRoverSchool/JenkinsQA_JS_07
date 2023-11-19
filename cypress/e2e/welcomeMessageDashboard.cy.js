/// <reference types ="cypress"/>

describe('welcomeMessageDashboard', () => {
    beforeEach(function() {
        cy.fixture('welcomeMsgDashboardfixtures').then((messageInfo) => {
            this.messageInfo = messageInfo;
        }) 
    })

    it('TC_02.03.020 | Dashboard > Welcomed message', function () {
        cy.get('h1').should('be.visible').and('have.text', this.messageInfo.welcomeMessage)
        cy.get('p').should('have.text', this.messageInfo.additionalInfo)
    })
})