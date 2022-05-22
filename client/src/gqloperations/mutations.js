import { gql } from "@apollo/client";
export const SIGNUP_USER=gql `
mutation createUser($userNew:UserInput!){
  user:signupUser(userNew:$userNew)
  {
    firstName
  }
}
`

export const LOGIN_USER = gql `

mutation SigninUser($userSignin:UserSigninInput!)
{
  user: signinUser(userSignin:$userSignin)
  {
    token
  }
}

`
//in above code: user is just alias name for signinUser
//if we don't mention then instead of writing user we have 
//to write signinUser 


export const CREATE_QUOTE= gql `

mutation createQuote($name:String!){
  quote: createQuote(name: $name)
}
`