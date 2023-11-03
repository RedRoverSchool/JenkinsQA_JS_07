/// <reference types="cypress"/>

describe('Check left side bar', () =>{
    it('TC_02.04.018 | Dashboard > Verify Command panel on the left side', () =>{
    cy.get('#tasks').each(($element) =>{

        const elementText = $element.text();

        const expectedText = '\n            \n            New Item\n            \n            People\n            \n            Build History\n            \n            \n\n    \n        \n            \n        \n    \nManage Jenkins\n            \n            \nMy Views';
        expect(elementText).to.equal(expectedText);

    });
    });
});
