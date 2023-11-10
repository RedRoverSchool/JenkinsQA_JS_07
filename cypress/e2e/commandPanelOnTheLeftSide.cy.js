/// <reference types="cypress"/>

describe('Command panel on the left side', ()=>{
    it('TC_02.04.019 |Dashboard > Command panel on the left side> Check icons near the link', ()=>{
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