import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(5)
  const [neutral, setNeutral] = useState(1)
  const [bad, setBad] = useState(2)
  const A1=()=>{setGood(good+1)}
  const A2=()=>{setNeutral(neutral+1)}
  const A3=()=>{setBad(bad+1)}
  return (
    <div>
      <h1>feedback for the given Staistics</h1>
      <p>
        <button onClick={A1}>good</button><button onClick={A2}>neutral</button><button onClick={A3}>bad</button>
      </p>
      <h2>Staistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}
export default App