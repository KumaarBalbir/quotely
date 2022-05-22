import { useMutation } from '@apollo/client'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { SIGNUP_USER } from '../gqloperations/mutations.js'


export default function Signup() {
  const [formData,setFormData]=useState({})
  const [signupUser,{data,loading,error}]=useMutation(SIGNUP_USER)

  
  if(loading)return <h2>loading</h2>

  
  const handleChange=(e)=>
  {
     setFormData({
       ...formData,
       [e.target.name]:e.target.value
     })
  }


  const handleSubmit=(e)=>{
    e.preventDefault()
    
    signupUser({
      variables: {
        userNew:formData
      }
    })
  }
  return (
    <div className='container my-container'>
   
      { //when error show this component 
         error && 
         <div className='red card-panel'>{error.message}</div>
      }
      
      {
         //if data exitsts
         data && data.user &&
         <div className='green card-panel'> {data.user.firstName} is signedUp. You can log in now </div>
      }
      <h5>Signup</h5>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" placeholder="First Name" name='firstName' onChange={(e)=>handleChange(e)} required /> 
        <input type="text" placeholder="Last Name" name='lastName' onChange={(e)=>handleChange(e)} required /> 

        <input type="email" placeholder="email" name='email' onChange={(e)=>handleChange(e)} required />
        <input type="password" placeholder="password" name='password' onChange={(e)=>handleChange(e)} required />
        <Link to="/login"><p>Already have an account?</p></Link>
        <button className="btn #1565c0 blue darken-3" type='submit'>Submit</button>
      </form>
    </div>
  )
}
