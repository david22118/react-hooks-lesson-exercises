import React ,{useState} from 'react'
export default function SpotCheck1() {
  const [number,setNumber]=useState(0)
  const increase=()=>{
    setNumber(number+1)
  }
  const decrease =()=>{
    setNumber(number-1)
  }

  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 1</h4>
      <div className="exercise" id="sc-1">
        <div>{number}</div>
        <button onClick={decrease}>decrease</button><button onClick={increase}> increase</button>
      </div>
    </div>
  )
}

