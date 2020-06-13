import React, { useState, useEffect } from 'react'

export default function SpotCheck3() {
  // your code here
  const [counter,setCounter]=useState(0)
  const updateLike=()=>{
    setCounter(counter+1)
  }

  useEffect(()=>{
   document.title= `You have ${counter} likes`
  })
  return (
    
    <div className="ex-space">
      
      <h4 className="ex-title">Spot Check 3</h4>
      <div className="exercise" id="sc-3">
        <p>My Post</p>
        <button onClick={updateLike}>like</button>
        
      </div>
    </div>
  )
}