/// <reference types= "Cypress" /> 

let accesstoken= 'QpwL5tke4Pnpja7X4'
let useremail
let userpassword='pakistan'
let userID
let token
let error_msg_empty_password= 'Missing password'
let error_msg_empty_emailORusername='Missing email or username'
let error_incorrect_email_in_regis="Note: Only defined users succeed registration"
let error_incorrect_email_in_login="user not found"
let incorrectemail="abcd@gmail.com"

//Get single user through singleuser end point
describe ('Given The singleuser API', () => {

  context('When i send GET request',()=>{
  it('then it should return the user based on given ID',() => {

          cy.request({

              method : 'GET',
              url : 'https://reqres.in/api/users/4',

              headers : {

                  'authorization' : 'Bearer ' + accesstoken
              }



          }).then((res) => {
            cy.log(JSON.stringify(res))
              expect(res.status).to.eq(200)
              expect(res.body)
              useremail=res.body.data.email
              userID=res.body.data.id
              cy.log(useremail)
            
          })



  })
  })


  //User Registration Scenarios using Credentials of user attained from "Singleuser" endpoint
  describe ('Given The Registration API', () => {  
    context('When i send POST request to register user with correct details',()=>{
        //successful registration test case
    it('then it should create the user successfully and return user id and Token. and the status code should be 200',() => {
  
            cy.request({
  
                method : 'POST',
                url : 'https://reqres.in/api/register',
  
                headers : {
  
                    'authorization' : 'Bearer ' + accesstoken
                },
                body : {

        
                    "email": useremail,
                    "password": userpassword
                }
  
  
  
            }).then((res) => {
              cy.log(JSON.stringify(res))
              expect(res.body.id).to.eq(userID)
                expect(res.status).to.eq(200)
                token=res.body.token
                cy.log(token)
                
                
              
            })
  
  
  
    })


    //unsuccessful user registration test case-1
    context('When i send POST request with email and empty password field',()=>{
       
    it('then it should give the error message "Missing password" and status code should be 400 ',() => {
  
            cy.request({
  
                method : 'POST',
                url : 'https://reqres.in/api/register',
  
                headers : {
  
                    'authorization' : 'Bearer ' + accesstoken
                },
                body : {

        
                    "email": useremail,
                    "password": ""
                },
                failOnStatusCode: false
  
  
  
            }).then((res) => {
                cy.log(JSON.stringify(res))
                expect(res.status).to.eq(400)
                  expect(res.body.error).to.eq(error_msg_empty_password)
                
                
              
            })
  
  
  
    })



 //unsuccessful user registration test case-2
 context('When i send POST request with empty email and filled password field',()=>{
       
    it('then it should give the error message "Missing email or username" and status code should be 400 ',() => {
  
            cy.request({
  
                method : 'POST',
                url : 'https://reqres.in/api/register',
  
                headers : {
  
                    'authorization' : 'Bearer ' + accesstoken
                },
                body : {

        
                    "email": "",
                    "password": userpassword
                },
                failOnStatusCode: false
  
  
  
            }).then((res) => {
                cy.log(JSON.stringify(res))
                expect(res.status).to.eq(400)
                  expect(res.body.error).to.eq(error_msg_empty_emailORusername)
                
                
              
            })
  
  
  
    })

//unsuccessful user registration test case-3
context('When i send POST request with incorrect/notListed email',()=>{
       
    it('then it should give the error message "Note: Only defined users succeed registration" and status code should be 400 ',() => {
  
            cy.request({
  
                method : 'POST',
                url : 'https://reqres.in/api/register',
  
                headers : {
  
                    'authorization' : 'Bearer ' + accesstoken
                },
                body : {

        
                    "email": incorrectemail,
                    "password": userpassword
                },
                failOnStatusCode: false
  
  
  
            }).then((res) => {
                cy.log(JSON.stringify(res))
                expect(res.status).to.eq(400)
                  expect(res.body.error).to.eq(error_incorrect_email_in_regis)
                
                
              
            })
  
  
  
    })



    //unsuccessful user registration test case-4
context('When i send POST request with email and password field ',()=>{
       
    it('then it should give the error message "missing email or username" and status code should be 400',() => {
  
            cy.request({
  
                method : 'POST',
                url : 'https://reqres.in/api/register',
  
                headers : {
  
                    'authorization' : 'Bearer ' + accesstoken
                },
                body : {

        
                    "email": "",
                    "password": ""
                },
                failOnStatusCode: false
  
  
  
            }).then((res) => {
                cy.log(JSON.stringify(res))
                expect(res.status).to.eq(400)
                  expect(res.body.error).to.eq(error_msg_empty_emailORusername)
                
                
              
            })
  
  
  
    })

    })



    
  
// Login Scenarios
  describe ('Given The Login API', () => {

    //successful Login Test Case
    context('When i send POST request with correct email and password',()=>{
  it('then it should return valid token in response and status code should be 200',() => {

    cy.request({

        method : 'POST',
        url : 'https://reqres.in/api/login',

        headers : {

            'authorization' : 'Bearer ' + accesstoken
        },
        body : {

        
            "email": useremail,
            "password": userpassword
        }



    }).then((res) => {
      cy.log(JSON.stringify(res))
        expect(res.status).to.eq(200)
        expect(res.body.token).to.eq(token)
       
    })



})


//Unsuccessful Login Test Case-1
context('When i send POST request with email and empty password field',()=>{
    it('then it should return error message "Missing password" and status code should be 400',() => {
  
      cy.request({
  
          method : 'POST',
          url : 'https://reqres.in/api/login',
  
          headers : {
  
              'authorization' : 'Bearer ' + accesstoken
          },
          body : {
  
          
              "email": useremail,
              "password": ""
          },
          failOnStatusCode: false
  
  
  
      }).then((res) => {
       

        cy.log(JSON.stringify(res))
        expect(res.status).to.eq(400)
          expect(res.body.error).to.eq(error_msg_empty_password)
         
      })
  
  
  
  })

  //Unsuccessful Login Test Case-2
context('When i send POST request with empty email and filled password field',()=>{
    it('then it should return error message "Missing email or username" and status code should be 400',() => {
  
      cy.request({
  
          method : 'POST',
          url : 'https://reqres.in/api/login',
  
          headers : {
  
              'authorization' : 'Bearer ' + accesstoken
          },
          body : {
  
          
              "email": "",
              "password": userpassword
          },
          failOnStatusCode: false
  
  
  
      }).then((res) => {
       

        cy.log(JSON.stringify(res))
        expect(res.status).to.eq(400)
          expect(res.body.error).to.eq(error_msg_empty_emailORusername)
         
      })
  
  
  
  })

   //Unsuccessful Login Test Case-3
context('When i send POST request with empty email and empty password field',()=>{
    it('then it should return error message "Missing email or username" and status code should be 400',() => {
  
      cy.request({
  
          method : 'POST',
          url : 'https://reqres.in/api/login',
  
          headers : {
  
              'authorization' : 'Bearer ' + accesstoken
          },
          body : {
  
          
              "email": "",
              "password": ""
          },
          failOnStatusCode: false
  
  
  
      }).then((res) => {
       

        cy.log(JSON.stringify(res))
        expect(res.status).to.eq(400)
          expect(res.body.error).to.eq(error_msg_empty_emailORusername)
         
      })
  
  
  
  })

  //Unsuccessful Login Test Case-4
context('When i send POST request with incorrect email',()=>{
    it('then it should return error message "user not found" and status code should be 400',() => {
  
      cy.request({
  
          method : 'POST',
          url : 'https://reqres.in/api/login',
  
          headers : {
  
              'authorization' : 'Bearer ' + accesstoken
          },
          body : {
  
          
            "email": incorrectemail,
            "password": userpassword
          },
          failOnStatusCode: false
  
  
  
      }).then((res) => {
       

        cy.log(JSON.stringify(res))
        expect(res.status).to.eq(400)
          expect(res.body.error).to.eq(error_incorrect_email_in_login)
         
      })
  
  
  
  })
}
)
}
)
  })
})
})
})
})
})
})
})
})
})