/// <reference types='Cypress' />

class LoginPage
{

    visit()
    {

        cy.visit('https://the-internet.herokuapp.com/login')
    }


    EnterEmailAndPassword(value1,value2)
    {
        const usernamefield=  cy.get('[id=username]')
        const passwordfield=  cy.get('[id=password]')
        usernamefield.clear()
        passwordfield.clear()
        usernamefield.type(value1)
        passwordfield.type(value2)
        const loginbutton=  cy.get('[type=submit]')
        
        loginbutton.click()
        return this
    }

    EmptyFields()
    {
        const loginbutton=  cy.get('[type=submit]')
        
        loginbutton.click()
       
    }
    }

    export default LoginPage
