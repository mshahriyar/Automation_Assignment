/// <reference types="cypress" />

import LoginPage from "../PageObjects/LoginPage.cy";

let username="tomsmith"
let password="SuperSecretPassword!"
let incorrectusetname="djbcdjbc"
let incorrectpassword="sj"

const loginpage=new LoginPage();
//Using beforeEachHook to run this function before each test starts running
describe("Login Test Suite", function(){


    beforeEach(function(){
        loginpage.visit()

    })


//valid login test case


it('verify if the user is able to login with correct credentials', function(){

    loginpage.EnterEmailAndPassword(username,password)

    cy.url().should('be.equal','https://the-internet.herokuapp.com/secure')
   



})

//invalid login test case-1
it('verify if the user is getting error message "your password is invalid" on entering incorrect password', function(){

   
     
       loginpage.EnterEmailAndPassword(username,incorrectpassword)
   
      cy.get('[id=flash]').should('have.text','\n            Your password is invalid!\n            ×\n          ')
      
   
   
   
   })

   //invalid login test case-2
it('verify if the user is getting error message "your username is invalid" on entering incorrect password', function(){

       loginpage.EnterEmailAndPassword(incorrectusetname,password)
   
      cy.get('[id=flash]').should('have.text','\n            Your username is invalid!\n            ×\n          ')
      
   
   
   
   })

   //invalid login test case-3
   it('verify if the user is getting error message "your username is invalid" on clicking login with empty fields', function(){

    loginpage.EmptyFields()

   cy.get('[id=flash]').should('have.text','\n            Your username is invalid!\n            ×\n          ')
   



})






})