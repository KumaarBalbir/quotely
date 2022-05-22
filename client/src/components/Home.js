
import { useQuery } from '@apollo/client'
import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import { GET_ALL_QUOTES } from '../gqloperations/queries.js'

export default function Home() {
//jab jab home page load hoga to ek network request hogi..aur useEffect wala code chalega..
//apollo client ke jariye isi request ko cashe kr lenge..so that next time agar home page load ho to new
//network call na ho, so it is kinda of optimisation, less network calls
//so useEffect ko avoid karenge and apollo client ko use karenge

//this part of code is tradition method in react..alternative and better 
//way is apollo client


  // useEffect(()=>{
  //   fetch('http://localhost:4000',{
  //     method:"post",
  //     headers:{
  //       "Content-Type":"application/json"
  //     },
  //     body: JSON.stringify({
  //       query:`
  //       query getAllQuotes{
  //         quotes{
  //           name
  //           by
  //           {
  //             _id
  //             firstName
  //           }
  //         }
  //       }`
  //     })
  //   }).then(res=>res.json()).then(data=>console.log(data))
  // },[])

const {loading,error,data}= useQuery(GET_ALL_QUOTES)
if(loading)return <h1>Loading</h1>
if(error)
{
  console.log(error.message)
}
if(data.quotes.length==0)
{
  return <h3>No quotes available</h3>
}

  return (
    <div className='container'>

      {
        data.quotes.map(quote=>{
          return (   
                <blockquote>
            <h5>{quote.name}</h5>
          <Link to={`/profile/${quote.by._id}`}> <p className='right-align'>~{quote.by.firstName}</p></Link>  
          </blockquote>
          )
        })
      }
 

    </div>
  )
}
