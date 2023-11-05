///<reference types ="cypress"/>

describe('sideMenu', () => {


    it('"Dashboard > Side menu"', function () {

    //New Item

    cy.get('[href="/view/all/newJob"]')
    .invoke('text')
    .then((text) => {
        const trimmedNewItem = text.trim();
        expect(trimmedNewItem).to.equal('New Item');
    })
    cy.get('[href="/view/all/newJob"]').click();
    cy.url().should('be.equal', 'http://localhost:8080/view/all/newJob');
    cy.get('[id="jenkins-home-link"]').should('be.visible').click()

    //People

    cy.get('[href="/asynchPeople/"]')
    .invoke('text')
    .then((text) => {
        const trimmedPeople = text.trim();
        expect(trimmedPeople).to.equal('People')
    })
    cy.get('[href="/asynchPeople/"]').click();
    cy.url().should('be.equal', 'http://localhost:8080/asynchPeople/');
    cy.get('[id="jenkins-home-link"]').should('be.visible').click()

    //Build History

    cy.get('[href="/view/all/builds"]')
    .invoke('text')
    .then((text) => {
        const trimmedBuildHistory = text.trim();
        expect(trimmedBuildHistory).to.equal('Build History')
    })
    cy.get('[href="/view/all/builds"]').click();
    cy.url().should('be.equal', 'http://localhost:8080/view/all/builds');
    cy.get('[id="jenkins-home-link"]').should('be.visible').click()

    //Manage Jenkins

    cy.get('[href="/manage"]')
    .invoke('text')
    .then((text) => {
    const cleanedText = text.trim(); 
    expect(cleanedText).to.equal('Manage Jenkins');
    })
    cy.get('[href="/manage"]').click();
    cy.url().should('be.equal', 'http://localhost:8080/manage/');
    cy.get('[id="jenkins-home-link"]').should('be.visible').click()

    //My Views

    cy.get('[href="/me/my-views"]')
    .invoke('text')
    .then((text) => {
        const cleanedTextMyViews = text.trim();
        expect(cleanedTextMyViews).to.equal('My Views');
    })
    cy.get('[href="/me/my-views"]').click();
    cy.url().should('be.equal', 'http://localhost:8080/me/my-views/view/all/');
    cy.get('[id="jenkins-home-link"]').should('be.visible').click()
    
    });

})