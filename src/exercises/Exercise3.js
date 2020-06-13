import React,{useState,useEffect} from 'react'
import { fetchExpenses } from '../data/utils'

export default function Exercise3() {
  // your code here

 
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
   const [month,setMonth]=useState([])
   const [expense,setExpense]=useState([])
  
  /*  useEffect(async()=>{
    const monthValue = month[0]
    const  index = months.findIndex(m=>m==monthValue)
    const expenses =await fetchExpenses(index)
    console.log(expenses)
    setExpense([...expenses])
   },[month])  */



   const handelInput= async(e)=>{
     debugger
    const input = e.target.value
    setMonth(input)
    const  index = months.findIndex(m=>m==input)
    const expenses =await fetchExpenses(index)
    console.log(expenses)
    setExpense([...expenses])
   }
    

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 3</h4>
      <div className="exercise" id="ex-3">
        <select onChange={handelInput} value={month}><option value="" selected disabled hidden>Choose Month</option>
  {months.map((m,i)=><option name={i} value={m} >{m}</option>)}
        </select>
  {expense.map(e=><div><span>{e.group}</span>
  <span> {e.date}</span> <span> {e.amount}</span></div>)}
      </div>
    </div>
  )
}