/// <reference types="cypress"/>
describe('allLinksExist', () => {
    it('allLinksExist> All links exist in the right order', () => {
     cy.get('#tasks').should(($) => {
        expect($.get(0).innerText)
        .to.eq('New Item\nPeople\nBuild History\nManage Jenkins\nMy Views')
      })
        });
});


