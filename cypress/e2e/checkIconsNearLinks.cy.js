/// <reference types="cypress"/>

describe('Check icons near links', ()=>{
it('Icons', ()=>{
    cy.get('a.task-link').each(($link)=>{
        const $parent = $link.parent();
        const hasIcon = $parent.find('.task-icon-link').length > 0;
        if(hasIcon) {
            const icon = $parent.find('.task-icon-link').attr('class');
            expect(icon).to.equal('task-icon-link');
    }
});
});
});