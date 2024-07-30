import React, { useEffect, useMemo, useState } from 'react'
import './App.css'

const App = () => {

  const [weight, setWeight] = useState(30);
  const [height, setHeight] = useState(150);
 

  const bmiWeight= (e)=>{
    setWeight(e.target.value)
  }

  const bmiHeight= (e)=>{
    setHeight(e.target.value)
  }

const output= useMemo(() => {const bmi= weight/((height/100)*(height/100))

return bmi.toFixed(1);
}, 
[weight, height])
  
  return (
<>      <main>
        <h1>BMI Calculator</h1>
      </main>
      <div className='calculate'>
      <div>
        <p>Weight is {weight}kg</p>
        <input type="range" name="range" id="range" min={10} max={110} onChange={bmiWeight}/>
      </div>
      <div>
      <p>Height is {height}kg</p>
        <input type="range" name="range" id="range" min={140} max={210} onChange={bmiHeight}/>
      </div>
      <p>the BMI outout is {output}</p>
      </div>
    </>
  )
}

export default App