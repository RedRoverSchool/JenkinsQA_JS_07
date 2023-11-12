/// <reference types = "cypress"/>

import sideItem from "../fixtures/leftSideItems.json"

describe('Verify all items on left side panel', () =>{
    it('TC_02.04.022 | Dashboard > Verify all items on left side panel', () =>{
        cy.get('a[href="/view/all/newJob"]').should('contain', sideItem.Item[0])
        cy.get('a[href="/asynchPeople/"]').should('contain', sideItem.Item[1])
        cy.get('a[href="/view/all/builds"]').should('contain', sideItem.Item[2])
        cy.get('a[href="/manage"]').should('contain',sideItem.Item[3])
        cy.get('a[href="/me/my-views"]').should('contain',sideItem.Item[4])
    })
}) 