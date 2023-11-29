// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

import HomePage from "../pageObjects/HomePage";
const homePage = new HomePage();

Cypress.Commands.add('createNewFolder', (folderName) => {
    homePage
        .clickNewItemLink()
        .fillInputNameField(folderName)
        .clickFolderBtn()
        .clickOKButtonFolder()
        .clickSaveBtn();
})

Cypress.Commands.add("createBaseURL", () => {
    return `http://${Cypress.env("local.host")}:${Cypress.env("local.port")}`;
});


Cypress.Commands.add('createPipelineProject', (pipelineProjectfolderName)=> {
    homePage.clickNewItemLink()
            .fillInputNameField(pipelineProjectfolderName)
            .clickPipelineTypeOfProjectBtn()
            .clickOKButtonPipelineProject()
    });

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })