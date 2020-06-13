import React,{useState,useEffect} from 'react'
import axios from "axios"
export default function Exercise2() {
  // your code here
   const [users,setUsers]=useState([])

   useEffect(()=>{
   (async()=>{
  const users= await axios.get('https://randomuser.me/api/?results=5')
         setUsers(users.data.results)
  })()
   },[])
   

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 2</h4>
      <div className="exercise" id="ex-2">
       {users.map(u=>{ return(<div><p>{u.name.first}</p>
       <p>{u.name.last}</p>
       <img src={u.picture.thumbnail}></img>
       
       </div>)})}
       

      </div>
    </div>
  )
}