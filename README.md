Tools and technology stack:
I used Cypress tool by using Javascript language 
Reason Behind technology Stack:
because this is a modern automation tool and it is simple to setup, having debugging capabilities, 
offer faster execution, and capture snapshots at the time of test execution
I used Gherkin approach for the easy readability and POM technique used to make the code resuable and more optimize. 

How to make the framework work and how to execute the test(s):
1- You need to run the VS code
2- Download the code from the git and add this folder to the Visual studio
3- Make sure to install npm and node first
4- If you don't have cypress follow these steps
  - npm init
  - npm install cypress --save-dev
5- Run this command to open the cypress dashboard 
   "npx cypress open"
6- Choose E2E confgiuration
7- Select the Chrome browser
8- If you want to runt API test then click on "APITestCases.cy.js" file
9- If you want to run the UI automation cases then click on "LoginTest.cy.js" file

Steps to improve:
I've not used encapsulation for now because I don't have much data to automate that's why not used fixture. We can improve our framework by using fixture 
and we can use Cucumber framework for the BDD approach.


