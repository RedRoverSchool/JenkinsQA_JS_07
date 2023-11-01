/// <reference types="cypress"/>
describe('allLinksExist', () => {
    it('allLinksExist> All links exist in the right order', () => {
     cy.get('#tasks')
     .should('have.innerText' , 'New Item\nPeople\nBuild History\nManage Jenkins\nMy Views')   
    });
});

