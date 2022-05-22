import { useMutation } from '@apollo/client'
import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { LOGIN_USER } from '../gqloperations/mutations.js'

export default function Login() {
  const navigate=useNavigate()
  const [formData,setFormData]=useState({})
  const [signinUser,{error,loading,data}]= useMutation(LOGIN_USER,{
    onCompleted(data){
      localStorage.setItem("token",data.user.token)
      navigate('/')
    }
  })

 
   if(loading) return <h1>Loading</h1> 

   //alternative of onCompleted method 

  //  if(data){
  //    localStorage.setItem("token",data.user.token)
  //    navigate("/")
  //  }

  const handleChange=(e)=>
  {
     setFormData({
       ...formData,
       [e.target.name]:e.target.value
     })
  }


  const handleSubmit=(e)=>{
    e.preventDefault()
    signinUser({
      variables: {
        userSignin:formData
      }
    })
    
  }
  return (
    <div className='container my-container'>
     {
        error && 
        <div className='red card-panel'>{error.message}</div>

     }
      <h5>Login</h5>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input type="email" placeholder="email" name='email' onChange={(e)=>handleChange(e)} required />
        <input type="password" placeholder="password" name='password' onChange={(e)=>handleChange(e)} required />
        <Link to="/signup"><p>Don't have account?</p></Link>
        <button className="btn #1565c0 blue darken-3" type='submit'>Login</button>
      </form>
    </div>
  )
}
