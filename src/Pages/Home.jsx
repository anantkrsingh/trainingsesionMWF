import React, { useState } from 'react'

export default function Home() {

  const [a,setA] = useState(0)
  const [b,setB] = useState(0)

  const [c,setC] = useState(0)
  
  function sum(){
    setC( parseInt(a) + parseInt(b))
  }
  function changeA (t){
    setA(t.target.value)
    
  }

  function changeB (t){
    setB(t.target.value)
    
  }


  return (
    <div>
      
      <h4>My Calculator</h4>

      <input value={a} onChange={changeA} className='bg-gray-500 m-4 rounded-md' type="number" placeholder='Enter a number' />
      +
      <input value={b} onChange={changeB} className='bg-gray-500 m-4 rounded-md' type="number" placeholder='Enter a number' />  


      <p>  {c} </p>

      { <button onClick={sum}>Sum</button>  }
    </div>
  )
}
