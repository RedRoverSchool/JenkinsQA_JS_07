/// <reference types="cypress"/>
import {links} from "../fixtures/dbCommandPanel.json"


describe('Verify Dashboard links redirected to the corresponding page', () => {
    it('TC_02.04.06 | Dashboard > Command panel on the left side', ()=>{ 
        cy.get('a[href="/view/all/newJob"]').click()
        cy.url().should('eq', links.NewItem);
        cy.get('#jenkins-name-icon').click()
        
        cy.get('a[href="/asynchPeople/"]').click();
        cy.url().should('eq', links.People);
        
        cy.get('a[href="/view/all/builds"').click()
        cy.url().should('eq', links.BuildHistory);
        
        cy.get('a[href="/manage"').click()
        cy.url().should('eq', links.ManageJenkins);
        
        cy.get('a[href="/me/my-views"]').click()
        cy.url().should('eq', links.MyViews)
    })
})