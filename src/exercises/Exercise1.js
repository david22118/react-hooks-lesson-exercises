import React,{useState} from 'react'

export default function Exercise1() {
  // your code here
   const [inputValue,setInputValue]=useState({name:"",city:"",country:""})
   const handleChange=(e)=>{
     
        setInputValue({...inputValue,[e.target.name]:e.target.value})
   }

  const countries = ['united states', 'china', 'united kingdom', 'australia']
  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 1</h4>
      <div className="exercise" id="ex-1">
      <input onChange={handleChange} name="name" value={inputValue.name} placeholder="Name"></input>
      <input onChange={handleChange} name="city" value={inputValue.city} placeholder="City"></input>
   <select onChange={handleChange}  value={inputValue.country} name="country"><option value="" selected disabled hidden>Choose country</option>{countries.map(c=><option value={c} >{c}</option>)} </select>
      </div>
    </div>
  )
}