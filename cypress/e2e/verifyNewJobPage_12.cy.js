/// <reference types="cypress"/>

import HomePage from "../pageObjects/HomePage";
import NewJobData from "../fixtures/newJobPageData.json";
import NewJobPage from "../pageObjects/NewJobPage";

describe('verifyNewJobPage_12', () => {
   
   const homePage= new HomePage();
   const newJobPage= new NewJobPage();

   beforeEach( () => {
      homePage
      .clickNewItemLink()
    })

   it('TC_03.01.12_1| +New Item>Verify the page “New Job”>verify Title text', () => {
      newJobPage
     .verifyTitleText(NewJobData.title)
     })
   it('TC_03.01.12_2| +New Item>Verify the page “New Job”>verify Text Field', () => {
      newJobPage
     .verifyTextField()
   }) 
   it('TC_03.01.12_3| +New Item>Verify the page “New Job”>verify Error Message', () => {
      newJobPage
      .verifyErrorMessage(NewJobData.errorMessage)
   })  
   it('TC_03.01.12_4| +New Item>Verify the page “New Job”>verify Type of Project', () => {
      newJobPage
      .verifyListOfTypeProgect(NewJobData.ProjectType)
   })
   it('TC_03.01.12_5| +New Item>Verify the page “New Job”>verify OK Name is empty,type not selected', () => {
      newJobPage
      .verifyTextFieldEmpty()
      .notSelectTypesInactiveButton()
   })
   it('TC_03.01.12_6| +New Item>Verify the page “New Job”>verify OK Name fielded, type not selected', () => {
      newJobPage
      .typeTextField(NewJobData.NameItem)
      .notSelectTypesInactiveButton()
   })
   it('TC_03.01.12_7| +New Item>Verify the page “New Job”>verify OK Name is empty, type is selected', () => {
      newJobPage
      .verifyTextFieldEmpty()
      .selectTypesInactiveButton()
})
it('TC_03.01.12_8| +New Item>Verify the page “New Job”>verify OK Name fielded, type is selected', () => {
   newJobPage
   .typeTextField(NewJobData.NameItem)
   .selectTypesActiveButton()
})
})