/// <reference types="cypress"/>

import HomePage from "../../pageObjects/HomePage";
import item from "../../fixtures/pom_fixtures/setUpAdistributedBuildMenu.json";
import {section} from "../../fixtures/pom_fixtures/homePageData.json";

describe("check_ARROW_Dd_Set_up_a_distributed_build.cy", () => {

  item.name.forEach((textName, ind) => {
  
   it(`TC_02.08.0${5+ind}> Near "${textName}" is a sign" ${item.icon[ind].name}" `, () => {
    const homePage = new HomePage();
    
      homePage
        .getContentBlockItem(ind)
        .eq(ind)
        .contains(textName)
        .should("be.visible");

        homePage
        .getContentBlockItemIcon(ind)
        // .eq(ind)
        .should("be.visible");

        homePage
        .getContentBlockItemPath(ind)
        .eq(ind)
        .should(
          "have.attr",
          "d",
          item.icon[ind].d
        );
        })
    });
  });

  

